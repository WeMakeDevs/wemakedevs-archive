import Adobe from '@/assets/home/company/adobe.svg';
import Amazon from '@/assets/home/company/amazon.svg';
import Cisco from '@/assets/home/company/cisco.svg';
import Clicklabs from '@/assets/home/company/clicklabs.svg';
import Google from '@/assets/home/company/google.svg';
import Microsoft from '@/assets/home/company/microsoft.svg';
import Razorpay from '@/assets/home/company/razorpay.svg';
import Samsung from '@/assets/home/company/samsung.svg';
import towerResearch from '@/assets/home/company/towerResearch.svg';
import Virtusa from '@/assets/home/company/virtusa.svg';

const Work = () => {
  return (
    <div className='layout pb-20'>
      <h2 className='h1'>Our students work at</h2>
      <hr className='styled-hr my-6' />
      <div className='flex flex-wrap justify-center gap-x-12 gap-y-6'>
        <img
          src={Google}
          alt='google'
          className='mx-auto max-w-[250px] md:mx-0'
        />
        <img
          src={Amazon}
          alt='amazon'
          className='mx-auto max-w-[250px] md:mx-0'
        />
        <img
          src={Microsoft}
          alt='microsoft'
          className='mx-auto max-w-[250px] md:mx-0'
        />
        <img
          src={Adobe}
          alt='adobe'
          className='mx-auto max-w-[250px] md:mx-0'
        />
        <img
          src={Samsung}
          alt='samsung'
          className='mx-auto max-w-[250px] md:mx-0'
        />
        <img
          src={Virtusa}
          alt='virtusa'
          className='mx-auto max-w-[250px] md:mx-0'
        />
        <img
          src={Cisco}
          alt='Cisco'
          className='mx-auto max-w-[250px] md:mx-0'
        />
        <img
          src={Razorpay}
          alt='Razorpay'
          className='mx-auto max-w-[250px] md:mx-0'
        />
        <img
          src={Clicklabs}
          alt='Clicklabs'
          className='mx-auto max-w-[250px] md:mx-0'
        />
        <img
          src={towerResearch}
          alt='Tower Research'
          className='mx-auto max-w-[250px] md:mx-0'
        />
      </div>
    </div>
  );
};

export default Work;
