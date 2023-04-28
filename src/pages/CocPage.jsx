import { VscDebugBreakpointLog } from 'react-icons/vsc';

import Layout from '@/components/layout';

const CocPage = ({ content }) => {
  return (
    <Layout content={content}>
      <section id='about' className='py-24'>
        <div className='layout text-center'>
          <h1 className='heading bg-gradient-to-br from-red-500 to-violet-500 bg-clip-text  text-center font-bold text-transparent md:text-center '>
            Code of Conduct
          </h1>
          <p className='h2 my-9 mx-auto max-w-6xl'>
            Our WeMakeDevs event is committed to providing a safe and welcoming
            environment for all participants, regardless of gender, ability,
            race, ethnicity, religion, or other characteristics. We expect all
            participants to adhere to the following code of conduct:
          </p>
          <ol>
            {content.coc.map((item) => (
              <li
                className='border border-white/20 bg-base-200 p-8 text-left first:rounded-t-xl last:rounded-b-xl'
                key={item.heading}
              >
                <VscDebugBreakpointLog
                  style={{ fill: 'url(#blue-gradient)' }}
                  className='h2'
                />
                <h2 className='h3'>{item.heading}</h2>
                <p className='h4 font-normal'>{item.content}</p>
              </li>
            ))}
          </ol>
          <p className='h2 my-9 mx-auto max-w-6xl'>
            We reserve the right to remove any participant who violates this
            code of conduct or whose behaviour is deemed harmful to others or
            disruptive to the event. Thank you for helping to create a safe and
            welcoming environment for everyone.
          </p>

          <p className='text-center'>
            <span className='text-bold md:text-center'> Special Cases : </span>
            <br />
            If you experience or witness any behavior that violates this Code of
            Conduct, please report it to the moderators immediately. You can
            contact us via contacts given below. All reports will be kept
            confidential and will be taken seriously. We are committed to
            creating a safe and welcoming community for all members, and we
            appreciate your help in achieving that goal.
          </p>
          <p className='text-center font-bold'>
            Aayush Sharma: +91 7011346429
            <br />
            Bhavya Sachdeva: +91 9310611138
            <br />
            Siddhant Khisty : +91 8308351644
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default CocPage;
