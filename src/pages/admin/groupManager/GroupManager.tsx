import Table from '../../../components/UI/Table';
import TableAction from '../../../components/UI/TableAction';
import Title from '../../../components/UI/Title';

const GroupManager = () => {
  const headers = ['group name', 'group type', 'created date', 'action'];
  const columns = '1fr 1fr 1fr 1.2fr';
  return (
    <section>
      <Title title='manage groups' />
      <Table headers={headers} columns={columns}>
        <>
          <p className='border border-[#d1d5dc]'>Alapomeji Association</p>
          <p className='border border-[#d1d5dc]'>Peer contribution</p>
          <p className='border  border-[#d1d5dc]'>April 4, 2025</p>
          <TableAction
            editUrl='/account/admin/group-manager/edit/1'
            viewUrl='/account/admin/group-manager/view/1'
            showUserAction
          />
        </>
        <>
          <p className='border border-[#d1d5dc]'>Majue Contribution</p>
          <p className='border border-[#d1d5dc]'>community portfolio</p>
          <p className='border  border-[#d1d5dc]'>April 4, 2025</p>
          <TableAction
            editUrl='/account/admin/group-manager/edit/1'
            viewUrl='/account/admin/group-manager/view/1'
            showUserAction
          />
        </>
      </Table>
    </section>
  );
};

export default GroupManager;
