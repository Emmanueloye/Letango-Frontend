import Table from '../../../components/UI/Table';
import Title from '../../../components/UI/Title';
import TableAction from '../../../components/UI/TableAction';

const UserManager = () => {
  const headers = ['username', 'email', 'reg date', 'action'];
  const columns = '1fr 1fr 1fr 1.2fr';
  return (
    <section>
      <Title title='manage users' />
      <div className='w-full overflow-x-auto'>
        <Table headers={headers} columns={columns}>
          <>
            <p className='border border-[#d1d5dc]'>osunkoya mayowa</p>
            <p className='border lowercase border-[#d1d5dc]'>
              mayorj@gmail.com
            </p>
            <p className='border  border-[#d1d5dc]'>April 4, 2025</p>
            <TableAction
              editUrl='/account/admin/user-manager/edit/1'
              viewUrl='/account/admin/user-manager/view/1'
              showUserAction
            />
          </>
          <>
            <p className='border border-[#d1d5dc]'>osunkoya mayowa</p>
            <p className='border lowercase border-[#d1d5dc]'>
              mayorj@gmail.com
            </p>
            <p className='border  border-[#d1d5dc]'>April 4, 2025</p>
            <TableAction
              editUrl='/account/admin/user-manager/edit/1'
              viewUrl='/account/admin/user-manager/view/1'
              showUserAction
            />
          </>
        </Table>
      </div>
    </section>
  );
};

export default UserManager;
