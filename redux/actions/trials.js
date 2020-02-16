import _ from 'lodash';
import { submitTrialAPI } from '../api/dashboard';

export const CHANGE_ANSWER = 'CHANGE_ANSWER';
export const CLEAR_ANSWER = 'CLEAR_ANSWER'
export const SAW_FAIL = 'SAW_FAIL'

export function changeAnswerAction(answer) {
  return {
    type: CHANGE_ANSWER,
    payload: {
      answer,
    },
  };
}

export function clearAnswerAction() {
  return {
    type : CLEAR_ANSWER
  }
}

function mapStateToSubmission(state, trialId, final) {
  const data = new FormData();

  _.forEach(state, (value, key) => {
    const { qtype, n0 } = value;
    const id = _.join(_.tail(_.split(key, '')), '');
    if (qtype === 'file_upload') {
      data.append(id, n0);
    }
  });

  const answers = _.reduce(
    state,
    (result, value, key) => {
      const { count, qtype } = value;
      const id = Number(_.join(_.tail(_.split(key, '')), ''));
      const hasFile = qtype === 'file_upload';
      const answer =
        qtype !== 'file_upload'
          ? JSON.stringify(
              _.reduce(
                _.range(count),
                (ans, val) => {
                  return _.concat(ans, _.get(value, `n${val}`, undefined));
                },
                [],
              ),
            )
          : ['kir'];
      return _.concat(result, {
        id,
        answer,
        type: qtype,
        has_file: hasFile,
      });
    },
    [],
  );
  let fixedAnswers = answers.slice(1)
  data.append(
    'json',
    JSON.stringify({
      id: trialId,
      question_submissions: fixedAnswers,
      final_submit: final,
    }),
  );
  let fixedJson = data.get('json').split('\\"').join('"').split('"[').join('[').split(']"').join(']')
  data.delete('json')
  data.append('json', fixedJson)
  console.log(data.get('json'))
  return data;
}

export const TRIAL_FAIL = 'TRIAL_FAIL';

export function trialFailAction(errors) {
  return {
    type: TRIAL_FAIL,
    payload: {
      errors,
    },
  };
}

export function clearAnswers() {
  return (dispatch) => {
    dispatch(clearAnswerAction())
  }
}

export function sawFailAction() {
  return {
    type : SAW_FAIL
  }
}

export function submitAnswersAction(token, contestId, milestoneId, taskId, trialId, final) {
  return (dispatch, getState) => {
    const answers = mapStateToSubmission(getState().trials, trialId, final);
    submitTrialAPI(answers, token, contestId, milestoneId, taskId, trialId).then((res) => {
      console.log(res.data)
      if(!_.isUndefined(res.data.status_code) && res.data.status_code !== 200)
      {
        dispatch(trialFailAction(res.data.details))
      }
    });
  };
}
