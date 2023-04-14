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

const companies = [
  {
    id: 1,
    name: 'Google',
    img_url: Google,
  },
  {
    id: 2,
    name: 'Microsoft',
    img_url: Microsoft,
  },
  {
    id: 3,
    name: 'Amazon',
    img_url: Amazon,
  },
  {
    id: 4,
    name: 'Adobe',
    img_url: Adobe,
  },
  {
    id: 5,
    name: 'Razorpay',
    img_url: Razorpay,
  },
  {
    id: 6,
    name: 'Samsung',
    img_url: Samsung,
  },
  {
    id: 7,
    name: 'Cisco',
    img_url: Cisco,
  },
  {
    id: 8,
    name: 'Virtusa',
    img_url: Virtusa,
  },
  {
    id: 9,
    name: 'Clicklabs',
    img_url: Clicklabs,
  },
  {
    id: 10,
    name: 'towerResearch',
    img_url: towerResearch,
  },
];

const Work = () => {
  return (
    <div className='pb-20'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl'>
          <h2 className='h1 text-center font-bold text-gray-800 dark:text-gray-300'>
            Our students work at
          </h2>
          <hr className='styled-hr mx-auto my-6' />
        </div>

        <div className='mx-auto mt-12 flex flex-wrap items-center justify-center'>
          {companies.map((company) => (
            <div key={company.id} className='m-4 h-20 w-48 rounded-md'>
              <img
                className='mx-auto h-full w-full object-contain'
                src={company.img_url}
                alt={company.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
