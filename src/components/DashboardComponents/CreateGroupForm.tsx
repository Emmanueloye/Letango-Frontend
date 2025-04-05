import { Form } from 'react-router-dom';

const CreateGroupForm = () => {
  return (
    <Form>
      {/* Group name input */}
      <div className='mb-2'>
        <label
          htmlFor='groupName'
          className={`after:text-red-500 after:content-['*'] after:font-700`}
        >
          group name
        </label>
        <input type='text' id='groupName' name='groupName' autoComplete='off' />
      </div>
      {/* Group type input */}
      <div className='mb-2'>
        <label
          htmlFor='groupType'
          className={`after:text-red-500 after:content-['*'] after:font-700`}
        >
          group name
        </label>
        <select name='groupType' id='groupType'>
          <option value='' hidden>
            Select group type
          </option>
          <option value=''>Ajo/contribution</option>
          <option value=''>Association</option>
          <option value=''>Club</option>
        </select>
      </div>
      {/* Group type input */}
      <div className='mb-2'>
        <label
          htmlFor='groupObjective'
          className={`after:text-red-500 after:content-['*'] after:font-700`}
        >
          Purpose of Group
        </label>

        <select name='groupType' id='groupType'>
          <option value='' hidden>
            Select group purpose
          </option>
          <option value=''>Personal contribution</option>
          <option value=''>Group contribution</option>
          <option value=''>Community project</option>
          <option value=''>Special project</option>
        </select>
      </div>
    </Form>
  );
};

export default CreateGroupForm;
