import { MdChat } from 'react-icons/md';
import GroupBanner from '../../components/DashboardComponents/GroupBanner';
import LinkBtn from '../../components/UI/LinkBtn';
import { useState } from 'react';
import { Form } from 'react-router-dom';
import Button from '../../components/UI/Button';
import ChatBox from '../../components/DashboardComponents/ChatBox';
import TransactionBox from '../../components/UI/TransactionBox';
import { chatMessages } from '../../assets/tempData/chatData';
import { FaTimesCircle } from 'react-icons/fa';

const GroupView = () => {
  const [showChat, setShowChat] = useState(false);
  // Pending
  // const [currentMsg, setCurrentMsg] = useState('');

  return (
    <section>
      {/* Group banner */}
      <GroupBanner />
      {/* Balance & report line */}
      <div className='bg-gray-100 dark:bg-slate-800 flex justify-between items-center flex-wrap mt-0.5 p-1.5 border-b-2 border-t-2 border-green-600'>
        <div className='font-poppins text-sm'>
          <span className='font-500'>Account Balance: </span>
          <span className='font-600 text-green-600'>&#8358;20,000</span>
        </div>

        <LinkBtn btnText='report' url='/account/manage-group/view/1/reports' />
      </div>
      {/* Group action buttons/links */}

      <div className='flex flex-wrap gap-3 mt-4 text-sm'>
        <div>
          <Button btnText='contribute' btnType='button' />
        </div>
        <div>
          <Button btnText='payout' btnType='button' />
        </div>
        <div>
          <Button btnText='invite members' btnType='button' />
        </div>
        <LinkBtn
          btnText='manage beneficiaries'
          url='/account/manage-group/view/1/beneficiaries'
        />
      </div>

      {/* Main body */}
      <div className='lg:flex lg:gap-3 relative mt-6'>
        <main className='lg:basis-3/5 basis-full'>
          <div className='flex justify-between flex-wrap items-center'>
            <h3 className='font-600'>Recent Transactions</h3>
            <MdChat
              className='text-primary-500 dark:text-slate-100 text-2xl cursor-pointer lg:hidden'
              title='Show chat'
              onClick={() => setShowChat(!showChat)}
            />
          </div>
          {/* Recent transactions */}
          <div>
            <TransactionBox
              description='Osunkoya Mayowa: contribution for Jan 2025'
              date='Thursday, April 4, 2025'
              time='11:45pm'
              amount={20_000}
            />
            <TransactionBox
              description='Anomymous: contribution for Jan 2025'
              date='Monday, April 14, 2025'
              time='10:15am'
              amount={20_000}
            />
            <TransactionBox
              description='Admin: payment for community gate'
              date='Monday, April 14, 2025'
              time='1:15pm'
              amount={25_000}
            />
          </div>
        </main>
        {/* Group chat */}
        <aside
          className={`bg-gray-100 dark:bg-slate-800 basis-full w-full lg:basis-2/5 absolute ${
            showChat ? 'block' : 'hidden'
          } lg:block top-0 lg:sticky lg:top-0 h-screen overflow-y-auto aside transition-all duration-500 ease-in-out`}
        >
          <div>
            {/* Chat text box */}

            <div className='sticky top-0 z-10 bg-gray-100 dark:bg-slate-600 p-2'>
              <div className='flex justify-between items-center border-b-2 border-green-600 mb-3'>
                <h3 className='font-600 '>Group conversation</h3>
                <FaTimesCircle
                  className='text-2xl block lg:hidden'
                  onClick={() => setShowChat(false)}
                />
              </div>
              <Form id='chatForm' className='relative'>
                <textarea
                  name='chat'
                  id='message'
                  placeholder='Type your message here...'
                  className='placeholder:text-sm mb-2 resize'
                ></textarea>
                <Button btnText='send' btnType='submit' />
              </Form>
            </div>
            {/* Chat card */}
            <article className='p-2 *:odd:ml-3'>
              {chatMessages.map((item) => {
                return (
                  <ChatBox key={item.id} chatMsg={item} bgColor='bg-gray-50' />
                );
              })}
            </article>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default GroupView;
