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
    img_url: Google,
  },
  {
    id: 2,
    img_url: Microsoft,
  },
  {
    id: 3,
    img_url: Amazon,
  },
  {
    id: 4,
    img_url: Adobe,
  },
  {
    id: 5,
    img_url: Razorpay,
  },
  {
    id: 6,
    img_url: Samsung,
  },
  {
    id: 7,
    img_url: Cisco,
  },
  {
    id: 8,
    img_url: Virtusa,
  },
  {
    id: 9,
    img_url: Clicklabs,
  },
  {
    id: 10,
    img_url: towerResearch,
  },
];

const Work = () => {
  return (
    <>
      <section className='mb-10 py-10'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='h1 font-bold text-gray-800 dark:text-gray-300'>
              Our students work at
            </h2>
          </div>

          <div className='mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center'>
            {companies.map((company) => (
              <div
                key={company.id}
                className='m-4 h-20 w-48 rounded-md dark:bg-gray-900'
              >
                <img
                  className='mx-auto h-full w-full object-contain'
                  src={company.img_url}
                  alt=''
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
