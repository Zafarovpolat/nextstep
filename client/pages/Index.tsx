import { useEffect, useRef } from "react";
import { ArrowRight, Check, Search, File, RotateCw } from "lucide-react";

export default function Index() {
  const ctaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      },
      { threshold: 0.6 }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background font-inter overflow-x-hidden transition-colors duration-300">
      {/* Header */}
      <header className="w-full fixed z-[100] top-4">
        <div className="flex h-10 items-center justify-center px-5">
          <div className="flex w-full max-w-[350px] items-center justify-between rounded-[10px] bg-black/[0.04] dark:bg-white/[0.04] backdrop-blur-[20px] px-5 py-[11px]">
            {/* Logo */}
            <div className="flex items-center">
              <svg
                width="87"
                height="16"
                viewBox="0 0 88 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-black dark:text-[#D9D9D9] transition-colors duration-300"
              >
                <g clipPath="url(#clip0_1_397)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.9183 4.11569C16.4715 4.11569 17.0021 4.23434 17.5101 4.4716C18.0181 4.70886 18.4077 5.02512 18.6786 5.42053V4.2513H20.2535V13.1994C20.2535 13.8095 20.1236 14.3406 19.864 14.7926C19.6043 15.2558 19.2317 15.6116 18.7463 15.8601C18.2722 16.12 17.719 16.25 17.0868 16.25H13.0055V14.928H16.9343C17.4536 14.928 17.8714 14.7586 18.1875 14.4197C18.5149 14.0807 18.6786 13.64 18.6786 13.0977V11.6912C18.4641 12.064 18.1028 12.3634 17.5947 12.5894C17.0867 12.8153 16.5222 12.9283 15.9013 12.9283C15.0546 12.9283 14.3264 12.7419 13.7167 12.3691C13.1184 11.9849 12.6555 11.4594 12.3281 10.7928C12.012 10.1263 11.8541 9.36924 11.8541 8.52191C11.8541 7.67457 12.012 6.91757 12.3281 6.251C12.6555 5.58441 13.1241 5.06475 13.7337 4.69191C14.3433 4.30777 15.0716 4.11569 15.9183 4.11569ZM16.1384 5.52237C15.6078 5.52237 15.1392 5.64652 14.7328 5.89508C14.3377 6.14364 14.0272 6.49393 13.8014 6.94585C13.5869 7.39776 13.4797 7.92314 13.4796 8.52191C13.4796 9.43705 13.7168 10.1658 14.1909 10.7081C14.6764 11.2505 15.3256 11.5216 16.1384 11.5216C16.669 11.5216 17.1319 11.3973 17.5271 11.1488C17.9335 10.9002 18.244 10.5501 18.4585 10.0982C18.6843 9.64622 18.7972 9.12072 18.7972 8.52191C18.7972 7.60679 18.5544 6.87799 18.0689 6.33569C17.5835 5.79341 16.94 5.52237 16.1384 5.52237Z"
                    fill="currentColor"
                  />
                  <path
                    d="M79.402 9.35955L72.8182 13.1511V11.4404L79.402 7.64893V9.35955Z"
                    fill="currentColor"
                  />
                  <path
                    d="M87.5 11.4404V13.1511L80.916 9.35955V7.64893L87.5 11.4404Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M50.4718 4.11569C51.3185 4.1157 52.0411 4.29643 52.6394 4.65796C53.2378 5.0195 53.695 5.51097 54.0111 6.13236C54.3385 6.74246 54.5021 7.41482 54.5021 8.1492C54.5021 8.38644 54.4909 8.60676 54.4684 8.81011H47.9288C47.9652 9.26766 48.0732 9.68572 48.2533 10.0642C48.4904 10.5387 48.8122 10.9059 49.2187 11.1657C49.6364 11.4256 50.1048 11.5556 50.6241 11.5556C51.2563 11.5556 51.7758 11.4256 52.1822 11.1657C52.5886 10.8946 52.8539 10.5104 52.9781 10.0133H54.57C54.4232 10.8946 53.9941 11.6008 53.2829 12.1318C52.5716 12.6628 51.6853 12.9283 50.6241 12.9283C49.7774 12.9283 49.0323 12.7249 48.3888 12.3182C47.7453 11.9114 47.2486 11.3691 46.8986 10.6912C46.5486 10.0133 46.3735 9.27331 46.3735 8.47117C46.3735 7.6577 46.5373 6.92326 46.8647 6.26797C47.1921 5.61267 47.6663 5.09302 48.2872 4.70888C48.9082 4.31345 49.6364 4.11569 50.4718 4.11569ZM50.4718 5.40373C49.9412 5.40373 49.4783 5.52238 49.0832 5.75965C48.6993 5.99691 48.4056 6.34702 48.2024 6.81024C48.105 7.0397 48.0325 7.29401 47.9846 7.57298H52.8933C52.8369 6.89512 52.5942 6.36408 52.1652 5.97995C51.7475 5.59582 51.183 5.40375 50.4718 5.40373Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M67.2852 12.7927H65.7104V11.4877C65.4507 11.917 65.0668 12.2673 64.5588 12.5385C64.0508 12.7983 63.5088 12.9283 62.933 12.9283C62.0863 12.9283 61.3581 12.7419 60.7485 12.3691C60.1501 11.9849 59.6872 11.4594 59.3598 10.7928C59.0437 10.1263 58.8858 9.36925 58.8858 8.52192C58.8858 7.67458 59.0437 6.91758 59.3598 6.25101C59.6872 5.58442 60.1558 5.06476 60.7654 4.69192C61.3751 4.30778 62.1033 4.1157 62.95 4.1157C63.5145 4.1157 64.0451 4.24554 64.5418 4.50539C65.0499 4.76524 65.4394 5.10987 65.7104 5.53918V0.692352H67.2852V12.7927ZM63.1701 5.52238C62.6395 5.52238 62.1709 5.64653 61.7645 5.89509C61.3694 6.13235 61.0589 6.48264 60.8331 6.94586C60.6186 7.39777 60.5114 7.92315 60.5114 8.52192C60.5114 9.43706 60.7485 10.1658 61.2227 10.7081C61.7081 11.2505 62.3573 11.5216 63.1701 11.5216C63.7007 11.5216 64.1637 11.403 64.5588 11.1657C64.9652 10.9172 65.2757 10.5669 65.4902 10.115C65.716 9.65175 65.8289 9.12069 65.8289 8.52192C65.8289 7.6068 65.5861 6.878 65.1007 6.3357C64.6152 5.79342 63.9717 5.52238 63.1701 5.52238Z"
                    fill="currentColor"
                  />
                  <path
                    d="M2.21038 11.2844H8.00212V12.7927H0.5V0.929626H2.21038V11.2844Z"
                    fill="currentColor"
                  />
                  <path
                    d="M10.4771 12.7927H8.90222V4.25131H10.4771V12.7927Z"
                    fill="currentColor"
                  />
                  <path
                    d="M23.5968 5.79343C23.8226 5.25116 24.1782 4.83875 24.6636 4.55631C25.149 4.26256 25.7192 4.11571 26.374 4.1157C27.0062 4.1157 27.5595 4.26255 28.0336 4.55631C28.5191 4.83876 28.8916 5.23995 29.1513 5.75966C29.4222 6.26806 29.5576 6.86686 29.5576 7.55602V12.7927H27.9658V7.84404C27.9658 7.15488 27.7795 6.60131 27.407 6.18329C27.0344 5.75396 26.549 5.53918 25.9507 5.53918C25.4991 5.53918 25.0927 5.65219 24.7314 5.87812C24.3815 6.10407 24.1048 6.41483 23.9016 6.81025C23.6984 7.20566 23.5968 7.65762 23.5968 8.16601V12.7927H22.0218V0.692352H23.5968V5.79343Z"
                    fill="currentColor"
                  />
                  <path
                    d="M33.558 4.2513H36.0981V5.62404H33.558V9.97951C33.558 10.4314 33.6709 10.7872 33.8967 11.0471C34.1338 11.2956 34.4611 11.42 34.8789 11.42H36.0981V12.7927H34.7603C33.9023 12.7927 33.2193 12.5497 32.7112 12.0639C32.2145 11.5668 31.9662 10.8832 31.9662 10.0133V5.62404H30.2049V4.2513H31.475C31.8024 4.2513 31.9662 4.08742 31.9662 3.75978V1.57355H33.558V4.2513Z"
                    fill="currentColor"
                  />
                  <path
                    d="M42.5128 2.06509H41.2257C40.8306 2.06509 40.5144 2.19492 40.2774 2.45477C40.0403 2.70333 39.9217 3.03676 39.9217 3.45479V4.25131H45.0361V12.7927H43.4442V5.62405H39.9217V12.7927H38.3299V5.62405H36.5857V4.25131H38.3299V3.40387C38.3299 2.86161 38.4428 2.38711 38.6686 1.9804C38.8944 1.56237 39.2162 1.24596 39.6339 1.03129C40.0629 0.805328 40.5597 0.692352 41.1242 0.692352H42.5128V2.06509Z"
                    fill="currentColor"
                  />
                  <path
                    d="M57.5088 12.7927H55.934V0.692352H57.5088V12.7927Z"
                    fill="currentColor"
                  />
                  <path
                    d="M79.402 4.04151V5.75213L72.8182 1.96062V0.25L79.402 4.04151Z"
                    fill="currentColor"
                  />
                  <path
                    d="M87.5 1.96062L80.916 5.75213V4.04151L87.5 0.25V1.96062Z"
                    fill="currentColor"
                  />
                  <path
                    d="M10.5787 2.72599H8.80066V0.692352H10.5787V2.72599Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_397">
                    <rect
                      width="87"
                      height="16"
                      fill="white"
                      transform="translate(0.5 0.25)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4 text-[11px] font-medium text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Services
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Request audit
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen relative w-full px-6 flex justify-center items-center pt-8">
        {/* Background Image */}
        <div className="absolute inset-0 max-[550px]:-top-8">
          <img
            src="/bg1.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/100 via-blue-50/40 to-transparent dark:from-gray-900 dark:via-slate-800/40 dark:to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[896px] mx-auto text-center">
          {/* Beta Badge */}
          <div className="inline-flex items-center justify-center px-2 py-1 rounded-md border border-black/12 mb-4">
            <span className="text-[10px] font-medium text-muted-foreground tracking-[0.22px]">
              Registered in IT Park
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-[35px] font-medium leading-[47px] tracking-[-0.585px] text-foreground mb-6">
            <span>The agency that automates </span>
            <br />
            <span>your business, then scales it.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-[15px] leading-6 text-muted-foreground max-w-[540px] mx-auto mb-6">
            Next Step Agency helps small and medium businesses in Uzbekistan scale through automation, websites, Telegram bots, and SMM promotion. Increase efficiency and sales by 20–50% with our all-in-one solutions.
          </p>

          {/* CTA Button */}
          <button className="inline-flex items-center justify-center gap-6 px-4 py-3 rounded-md bg-black/[0.04] dark:bg-white/[0.04] text-[11px] font-medium text-muted-foreground tracking-[0.24px] hover:bg-black/[0.06] dark:hover:bg-white/[0.06] transition-colors">
            <span>Request audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Interface Screenshot */}
      <section className="px-6 pb-[120px]">
        <div className="max-w-[1280px] mx-auto">
          <div className="rounded-[10px] border border-black/6 bg-white/0 shadow-[0_2px_32px_0_rgba(0,0,0,0.04)] overflow-hidden">
            <img
              src="/hero.webp"
              alt="Next Step Agency Dashboard"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Feature Section 1: Structured Signal */}
      <section className="px-6 pt-[120px]">
        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-[29px] font-medium leading-[38px] tracking-[-0.16px] text-foreground mb-2">
                Automated capture from
                <br />
                full business processes.
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-[14px] leading-6 tracking-[0.15px] text-muted-foreground">
                Capture every customer interaction automatically. From orders and messages to support tickets and analytics.
              </p>
              <p className="text-[14px] leading-6 tracking-[0.15px] text-muted-foreground">
                Next Step Agency stores everything about your business relationships, ensuring no lead or insight is lost, with integrations like Payme, Click, and local ERP.
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-[100px]  max-w-[1440px] mx-auto h-[550px] max-[1280px]:mt-[60px] max-[1280px]:h-[400px] overflow-visible max-[550px]:h-[300px] max-[440px]:h-[200px]">
          <svg
            className="min-w-[1500px] max-w-[2000px] max-[1440px]:max-w-[110vw] max-[1440px]:min-w-[auto] scale-100 overflow-visible absolute left-[-30px] top-[50px] w-[1500px] h-[550px] max-[1280px]:h-[400px] max-[550px]:h-[300px] max-[880px]:scale-[2] max-[440px]:top-[-10px]"
            viewBox="0 0 1719 620"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
            style={{ opacity: 1, transition: 'opacity 2s ease-out' }}
          >
            {/* Содержимое из первого SVG */}
            <g opacity="0.2" stroke="#666" strokeWidth="0.75">
              <rect width="305.797" height="305.797" transform="matrix(0.313861 -0.949469 0.313861 0.949469 1526.05 310.47)" fill="#F5F5F5"></rect>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 0.949469 -0.313861 0.949469 1525.86 309.898)"></line>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 0.949469 -0.313861 0.949469 1541.86 261.508)"></line>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 0.949469 -0.313861 0.949469 1557.86 213.117)"></line>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 0.949469 -0.313861 0.949469 1573.85 164.726)"></line>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 0.949469 -0.313861 0.949469 1589.85 116.335)"></line>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 0.949469 -0.313861 0.949469 1605.85 67.9448)"></line>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 0.949469 -0.313861 0.949469 1621.84 19.5542)"></line>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 -0.949469 0.313861 0.949469 1621.79 601.26)"></line>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 -0.949469 0.313861 0.949469 1605.8 552.869)"></line>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 -0.949469 0.313861 0.949469 1589.8 504.479)"></line>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 -0.949469 0.313861 0.949469 1573.81 456.087)"></line>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 -0.949469 0.313861 0.949469 1557.81 407.697)"></line>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 -0.949469 0.313861 0.949469 1541.81 359.306)"></line>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 -0.949469 0.313861 0.949469 1525.82 310.916)"></line>
            </g>
            <g opacity="0.5" stroke="#666" strokeWidth="0.75">
              <rect width="305.797" height="305.797" transform="matrix(0.313861 -0.949469 0.313861 0.949469 1466.05 310.47)" fill="#F5F5F5"></rect>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 0.949469 -0.313861 0.949469 1465.86 309.899)"></line>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 0.949469 -0.313861 0.949469 1481.86 261.508)"></line>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 0.949469 -0.313861 0.949469 1497.85 213.118)"></line>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 0.949469 -0.313861 0.949469 1513.85 164.727)"></line>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 0.949469 -0.313861 0.949469 1529.85 116.336)"></line>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 0.949469 -0.313861 0.949469 1545.84 67.9453)"></line>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 0.949469 -0.313861 0.949469 1561.84 19.5547)"></line>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 -0.949469 0.313861 0.949469 1561.79 601.26)"></line>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 -0.949469 0.313861 0.949469 1545.79 552.87)"></line>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 -0.949469 0.313861 0.949469 1529.8 504.479)"></line>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 -0.949469 0.313861 0.949469 1513.8 456.088)"></line>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 -0.949469 0.313861 0.949469 1497.81 407.697)"></line>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 -0.949469 0.313861 0.949469 1481.81 359.307)"></line>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 -0.949469 0.313861 0.949469 1465.81 310.916)"></line>
            </g>
            <g stroke="#666" strokeWidth="0.75">
              <rect width="305.797" height="305.797" transform="matrix(0.313861 -0.949469 0.313861 0.949469 1406.04 310.474)" fill="#F5F5F5"></rect>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 0.949469 -0.313861 0.949469 1405.86 309.902)"></line>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 0.949469 -0.313861 0.949469 1421.85 261.512)"></line>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 0.949469 -0.313861 0.949469 1437.85 213.121)"></line>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 0.949469 -0.313861 0.949469 1453.85 164.73)"></line>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 0.949469 -0.313861 0.949469 1469.84 116.339)"></line>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 0.949469 -0.313861 0.949469 1485.84 67.9487)"></line>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 0.949469 -0.313861 0.949469 1501.83 19.5581)"></line>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 -0.949469 0.313861 0.949469 1501.79 601.261)"></line>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 -0.949469 0.313861 0.949469 1485.79 552.87)"></line>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 -0.949469 0.313861 0.949469 1469.79 504.479)"></line>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 -0.949469 0.313861 0.949469 1453.8 456.088)"></line>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 -0.949469 0.313861 0.949469 1437.8 407.698)"></line>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 -0.949469 0.313861 0.949469 1421.81 359.307)"></line>
              <line x1="0" y1="-0.375" x2="307" y2="-0.375" transform="matrix(0.313861 -0.949469 0.313861 0.949469 1405.81 310.917)"></line>
            </g>
            <g stroke="#666" strokeWidth="0.5" className="FullFidelityCapture_rightRays__3IwGA">
              <line x1="869.92" y1="310.237" x2="1524.92" y2="531.237"></line>
              <line x1="870.081" y1="310.237" x2="1484.08" y2="101.237"></line>
              <line x1="870" y1="310.25" x2="1582" y2="310.25" strokeDasharray="1 1"></line>
              <line x1="869.961" y1="310.247" x2="1485.96" y2="408.247" strokeDasharray="1 1"></line>
              <line x1="869.941" y1="310.243" x2="1469.94" y2="456.243" strokeDasharray="1 1"></line>
              <line x1="870.059" y1="310.243" x2="1526.06" y2="150.243" strokeDasharray="1 1"></line>
              <line x1="869.981" y1="310.249" x2="1469.98" y2="356.249" strokeDasharray="1 1"></line>
              <line x1="870.019" y1="310.249" x2="1534.02" y2="259.249" strokeDasharray="1 1"></line>
              <line x1="870.039" y1="310.247" x2="1454.04" y2="217.247" strokeDasharray="1 1"></line>
            </g>
            <g>
              <path d="M852.5 153.25c6.859 0 13.437 4.322 19.458 12.239 6.018 7.914 11.448 19.38 16.013 33.572 9.128 28.38 14.779 67.603 14.779 110.939s-5.651 82.559-14.779 110.939c-4.565 14.192-9.995 25.658-16.013 33.572-6.021 7.917-12.599 12.239-19.458 12.239-6.859 0-13.437-4.322-19.458-12.239-6.018-7.914-11.448-19.38-16.013-33.572-9.128-28.38-14.779-67.603-14.779-110.939s5.651-82.559 14.779-110.939c4.565-14.192 9.995-25.658 16.013-33.572 6.021-7.917 12.599-12.239 19.458-12.239Z" fill="#F5F5F5" stroke="#666" strokeWidth="0.5" strokeDasharray="2 2" transform="translate(6, 0)"></path>
              <path d="M852.5 153.25c6.859 0 13.437 4.322 19.458 12.239 6.018 7.914 11.448 19.38 16.013 33.572 9.128 28.38 14.779 67.603 14.779 110.939s-5.651 82.559-14.779 110.939c-4.565 14.192-9.995 25.658-16.013 33.572-6.021 7.917-12.599 12.239-19.458 12.239-6.859 0-13.437-4.322-19.458-12.239-6.018-7.914-11.448-19.38-16.013-33.572-9.128-28.38-14.779-67.603-14.779-110.939s5.651-82.559 14.779-110.939c4.565-14.192 9.995-25.658 16.013-33.572 6.021-7.917 12.599-12.239 19.458-12.239Z" fill="#F5F5F5" stroke="#666" strokeWidth="0.5" transform="translate(0, 0)"></path>
            </g>
            <g stroke="#666" strokeWidth="0.5" className="FullFidelityCapture_leftRays__y__4X">
              <path d="m.92 597.763 849-288"></path>
              <path d="M1.08 21.763l849 288"></path>
              <path strokeDasharray="1 1" d="M1 309.75h849"></path>
              <path strokeDasharray="1 1" d="M.96 445.753l849-136"></path>
              <path strokeDasharray="1 1" d="M.941 517.757l848.999-208"></path>
              <path strokeDasharray="1 1" d="M1.059 102.757l849 207"></path>
              <path strokeDasharray="1 1" d="M.981 374.751l849-65"></path>
              <path strokeDasharray="1 1" d="M1.019 244.751l849 65"></path>
              <path strokeDasharray="1 1" d="M1.039 174.753l849 135"></path>
            </g>
          </svg>
        </div>
      </section>

      {/* Feature Section 3: Grounded Answers */}
      <section className="px-6 py-[200px]">
        <div className="max-w-[970px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-[72px]">
            <div>
              <h2 className="text-[29px] font-medium leading-[38px] tracking-[-0.16px] text-foreground mb-2">
                Insights and analytics
                <br />
                for business growth.
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-[14px] leading-6 tracking-[0.15px] text-muted-foreground">
                Ask questions in natural language to uncover insights across your business data.
              </p>
              <p className="text-[14px] leading-6 tracking-[0.15px] text-muted-foreground">
                Next Step Agency analyzes structured CRM data and customer interactions, helping you refine your product roadmap and marketing with real-time queries and SMM optimization.
              </p>
            </div>
          </div>

          <div className="relative mt-[200px] max-[1440px]:h-[800px] max-[1440px]:mt-[100px]  h-[1000px] flex w-full overflow-visible justify-center items-center  py-24 max-[800px]:min-h-[580px]">
            <svg
              className="min-w-[auto] max-[1440px]:scale-[1] max-w-[2000px] mt-8 -translate-x-[200px] scale-[1.3] skew-x-[-40deg] skew-y-[15deg] origin-center max-[800px]:min-w-[auto] max-[800px]:max-w-[100vw] max-[800px]:translate-x-0 overflow-visible absolute left-[-30px] top-[50px] h-[500px]"
              viewBox="0 0 1728 566"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              style={{ opacity: 1, transition: 'opacity 2s ease-out' }}
            >
              {/* Содержимое из нового SVG */}
              <path d="M458 226.285L664.026 226.285C665.155 226.285 666.232 226.762 666.99 227.6L689.056 251.965C689.814 252.803 690.891 253.28 692.021 253.28L864 253.285" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M328 275.285L656.804 275.285C657.886 275.285 658.922 274.846 659.676 274.069L670.891 262.5C671.645 261.723 672.681 261.285 673.763 261.285L864 261.285" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M355 294.285L650.007 294.285C651.055 294.285 652.062 293.873 652.81 293.139L674.913 271.431C675.661 270.696 676.667 270.285 677.716 270.285L864 270.285" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M22 302.285L654.075 302.285C655.123 302.285 656.13 301.873 656.878 301.139L678.982 279.431C679.729 278.696 680.736 278.285 681.784 278.285L864 278.285" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M864 286.285L686.144 286.285C685.051 286.285 684.005 286.732 683.25 287.523L661.199 310.625C660.444 311.415 659.398 311.863 658.305 311.863L280.433 311.863C279.425 311.863 278.455 312.243 277.715 312.928L269.842 320.219C269.103 320.904 268.132 321.285 267.124 321.285L228 321.285" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M414 321.285L662.058 321.285C663.188 321.285 664.265 320.807 665.023 319.969L687.082 295.6C687.84 294.763 688.917 294.285 690.047 294.285L864 294.285" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M864 302.285L694.301 302.285C693.137 302.285 692.031 302.791 691.272 303.673L652.275 348.897C651.516 349.778 650.41 350.285 649.246 350.285L583.539 350.285C582.471 350.285 581.447 349.857 580.696 349.098L570.831 339.128C570.079 338.369 569.055 337.942 567.987 337.942L284 337.942" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M559 384.285L649.467 384.285C650.676 384.285 651.82 383.738 652.579 382.798L709.148 312.771C709.907 311.831 711.051 311.285 712.259 311.285L864 311.285" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M722 350.285L734.606 350.285C735.867 350.285 737.054 349.69 737.81 348.68L757.837 321.89C758.592 320.88 759.78 320.285 761.041 320.285L864 320.285" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M409.125 326.035C406.502 326.035 404.375 323.908 404.375 321.285C404.375 318.661 406.502 316.535 409.125 316.535C411.748 316.535 413.875 318.661 413.875 321.285C413.875 323.908 411.748 326.035 409.125 326.035Z" fill="#F5F5F5" stroke="#666666" style={{ fill: 'color(display-p3 0.9608 0.9608 0.9608)', fillOpacity: 1, stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M325.125 280.035C322.502 280.035 320.375 277.908 320.375 275.285C320.375 272.661 322.502 270.535 325.125 270.535C327.748 270.535 329.875 272.661 329.875 275.285C329.875 277.908 327.748 280.035 325.125 280.035Z" fill="#F5F5F5" stroke="#666666" style={{ fill: 'color(display-p3 0.9608 0.9608 0.9608)', fillOpacity: 1, stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M453.125 231.035C450.502 231.035 448.375 228.908 448.375 226.285C448.375 223.661 450.502 221.535 453.125 221.535C455.748 221.535 457.875 223.661 457.875 226.285C457.875 228.908 455.748 231.035 453.125 231.035Z" fill="#F5F5F5" stroke="#666666" style={{ fill: 'color(display-p3 0.9608 0.9608 0.9608)', fillOpacity: 1, stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M555.125 389.035C552.502 389.035 550.375 386.908 550.375 384.285C550.375 381.661 552.502 379.535 555.125 379.535C557.748 379.535 559.875 381.661 559.875 384.285C559.875 386.908 557.748 389.035 555.125 389.035Z" fill="#F5F5F5" stroke="#666666" style={{ fill: 'color(display-p3 0.9608 0.9608 0.9608)', fillOpacity: 1, stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M717.125 355.035C714.502 355.035 712.375 352.908 712.375 350.285C712.375 347.661 714.502 345.535 717.125 345.535C719.748 345.535 721.875 347.661 721.875 350.285C721.875 352.908 719.748 355.035 717.125 355.035Z" fill="#F5F5F5" stroke="#666666" style={{ fill: 'color(display-p3 0.9608 0.9608 0.9608)', fillOpacity: 1, stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M279.125 343.035C276.502 343.035 274.375 340.908 274.375 338.285C274.375 335.661 276.502 333.535 279.125 333.535C281.748 333.535 283.875 335.661 283.875 338.285C283.875 340.908 281.748 343.035 279.125 343.035Z" fill="#F5F5F5" stroke="#666666" style={{ fill: 'color(display-p3 0.9608 0.9608 0.9608)', fillOpacity: 1, stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M223.125 326.035C220.502 326.035 218.375 323.908 218.375 321.285C218.375 318.661 220.502 316.535 223.125 316.535C225.748 316.535 227.875 318.661 227.875 321.285C227.875 323.908 225.748 326.035 223.125 326.035Z" fill="#F5F5F5" stroke="#666666" style={{ fill: 'color(display-p3 0.9608 0.9608 0.9608)', fillOpacity: 1, stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M17.5 308.035C14.6005 308.035 12.25 305.684 12.25 302.785C12.25 299.885 14.6005 297.535 17.5 297.535C20.3995 297.535 22.75 299.885 22.75 302.785C22.75 305.684 20.3995 308.035 17.5 308.035Z" fill="#F5F5F5" stroke="#666666" style={{ fill: 'color(display-p3 0.9608 0.9608 0.9608)', fillOpacity: 1, stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M1269.13 347.285L1063.1 347.285C1061.97 347.285 1060.89 346.807 1060.13 345.97L1038.07 321.604C1037.31 320.767 1036.23 320.289 1035.1 320.289L863.125 320.285" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M1399.12 297.285L1070.32 297.285C1069.24 297.285 1068.2 297.723 1067.45 298.5L1056.23 310.069C1055.48 310.846 1054.44 311.285 1053.36 311.285L863.125 311.284" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M1372.12 278.285L1077.12 278.285C1076.07 278.285 1075.06 278.696 1074.32 279.431L1052.21 301.139C1051.46 301.873 1050.46 302.285 1049.41 302.285L863.125 302.284" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M1705.12 270.285L1073.05 270.285C1072 270.285 1071 270.696 1070.25 271.431L1048.14 293.139C1047.4 293.873 1046.39 294.285 1045.34 294.285L863.125 294.284" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M863.125 286.284L1040.98 286.285C1042.07 286.285 1043.12 285.837 1043.87 285.047L1065.93 261.945C1066.68 261.154 1067.73 260.707 1068.82 260.707L1446.69 260.707C1447.7 260.707 1448.67 260.326 1449.41 259.641L1457.28 252.35C1458.02 251.665 1458.99 251.285 1460 251.285L1499.12 251.285" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M1313.12 251.285L1065.07 251.285C1063.94 251.285 1062.86 251.763 1062.1 252.6L1040.04 276.969C1039.28 277.807 1038.21 278.285 1037.08 278.285L863.125 278.284" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M863.125 270.284L1032.82 270.285C1033.99 270.285 1035.09 269.778 1035.85 268.897L1074.85 223.673C1075.61 222.791 1076.72 222.285 1077.88 222.285L1143.59 222.285C1144.65 222.285 1145.68 222.712 1146.43 223.471L1156.29 233.441C1157.05 234.2 1158.07 234.628 1159.14 234.628L1443.12 234.628" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M1168.12 188.285L1077.66 188.285C1076.45 188.285 1075.31 188.831 1074.55 189.771L1017.98 259.798C1017.22 260.738 1016.07 261.285 1014.87 261.285L863.125 261.285" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M1005.12 223.285L992.519 223.285C991.258 223.285 990.071 223.88 989.315 224.89L969.288 251.68C968.533 252.69 967.345 253.285 966.084 253.285L863.125 253.285" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M1318 246.535C1320.62 246.535 1322.75 248.661 1322.75 251.285C1322.75 253.908 1320.62 256.035 1318 256.035C1315.38 256.035 1313.25 253.908 1313.25 251.285C1313.25 248.661 1315.38 246.535 1318 246.535Z" fill="#F5F5F5" stroke="#666666" style={{ fill: 'color(display-p3 0.9608 0.9608 0.9608)', fillOpacity: 1, stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M1402 292.535C1404.62 292.535 1406.75 294.661 1406.75 297.285C1406.75 299.908 1404.62 302.035 1402 302.035C1399.38 302.035 1397.25 299.908 1397.25 297.285C1397.25 294.661 1399.38 292.535 1402 292.535Z" fill="#F5F5F5" stroke="#666666" style={{ fill: 'color(display-p3 0.9608 0.9608 0.9608)', fillOpacity: 1, stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M1274 342.535C1276.62 342.535 1278.75 344.661 1278.75 347.285C1278.75 349.908 1276.62 352.035 1274 352.035C1271.38 352.035 1269.25 349.908 1269.25 347.285C1269.25 344.661 1271.38 342.535 1274 342.535Z" fill="#F5F5F5" stroke="#666666" style={{ fill: 'color(display-p3 0.9608 0.9608 0.9608)', fillOpacity: 1, stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M1172 183.535C1174.62 183.535 1176.75 185.661 1176.75 188.285C1176.75 190.908 1174.62 193.035 1172 193.035C1169.38 193.035 1167.25 190.908 1167.25 188.285C1167.25 185.661 1169.38 183.535 1172 183.535Z" fill="#F5F5F5" stroke="#666666" style={{ fill: 'color(display-p3 0.9608 0.9608 0.9608)', fillOpacity: 1, stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M1010 218.535C1012.62 218.535 1014.75 220.661 1014.75 223.285C1014.75 225.908 1012.62 228.035 1010 228.035C1007.38 228.035 1005.25 225.908 1005.25 223.285C1005.25 220.661 1007.38 218.535 1010 218.535Z" fill="#F5F5F5" stroke="#666666" style={{ fill: 'color(display-p3 0.9608 0.9608 0.9608)', fillOpacity: 1, stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M1448 229.535C1450.62 229.535 1452.75 231.661 1452.75 234.285C1452.75 236.908 1450.62 239.035 1448 239.035C1445.38 239.035 1443.25 236.908 1443.25 234.285C1443.25 231.661 1445.38 229.535 1448 229.535Z" fill="#F5F5F5" stroke="#666666" style={{ fill: 'color(display-p3 0.9608 0.9608 0.9608)', fillOpacity: 1, stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M1504 246.535C1506.62 246.535 1508.75 248.661 1508.75 251.285C1508.75 253.908 1506.62 256.035 1504 256.035C1501.38 256.035 1499.25 253.908 1499.25 251.285C1499.25 248.661 1501.38 246.535 1504 246.535Z" fill="#F5F5F5" stroke="#666666" style={{ fill: 'color(display-p3 0.9608 0.9608 0.9608)', fillOpacity: 1, stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M1709.62 264.535C1712.52 264.535 1714.88 266.885 1714.88 269.785C1714.88 272.684 1712.52 275.035 1709.62 275.035C1706.73 275.035 1704.38 272.684 1704.38 269.785C1704.38 266.885 1706.73 264.535 1709.62 264.535Z" fill="#F5F5F5" stroke="#666666" style={{ fill: 'color(display-p3 0.9608 0.9608 0.9608)', fillOpacity: 1, stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M834 439.5L834 398.22C834 397.122 834.452 396.072 835.249 395.317L851.747 379.683C852.544 378.928 852.996 377.878 852.996 376.78L852.999 294" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M905.004 374L854.172 323.172C853.421 322.421 853 321.404 853 320.343L853 280" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M834 438.25C836.623 438.25 838.75 440.377 838.75 443C838.75 445.623 836.623 447.75 834 447.75C831.377 447.75 829.25 445.623 829.25 443C829.25 440.377 831.377 438.25 834 438.25Z" fill="#F5F5F5" stroke="#666666" style={{ fill: 'color(display-p3 0.9608 0.9608 0.9608)', fillOpacity: 1, stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M908 381.75C905.377 381.75 903.25 379.623 903.25 377C903.25 374.377 905.377 372.25 908 372.25C910.623 372.25 912.75 374.377 912.75 377C912.75 379.623 910.623 381.75 908 381.75Z" fill="#F5F5F5" stroke="#666666" style={{ fill: 'color(display-p3 0.9608 0.9608 0.9608)', fillOpacity: 1, stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M898 145.5L898 186.78C898 187.878 897.548 188.928 896.751 189.683L880.253 205.317C879.456 206.072 879.004 207.122 879.004 208.22L879.001 291" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M826.996 190L877.828 240.828C878.579 241.579 879 242.596 879 243.657L879 284" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M898 146.75C895.377 146.75 893.25 144.623 893.25 142C893.25 139.377 895.377 137.25 898 137.25C900.623 137.25 902.75 139.377 902.75 142C902.75 144.623 900.623 146.75 898 146.75Z" fill="#F5F5F5" stroke="#666666" style={{ fill: 'color(display-p3 0.9608 0.9608 0.9608)', fillOpacity: 1, stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M824 182.25C826.623 182.25 828.75 184.377 828.75 187C828.75 189.623 826.623 191.75 824 191.75C821.377 191.75 819.25 189.623 819.25 187C819.25 184.377 821.377 182.25 824 182.25Z" fill="#F5F5F5" stroke="#666666" style={{ fill: 'color(display-p3 0.9608 0.9608 0.9608)', fillOpacity: 1, stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M1093 501.285L1093 486.51C1093 484.866 1091.99 483.389 1090.46 482.788L867.81 395.282C866.28 394.68 865.273 393.203 865.273 391.559L865.275 305.285" stroke="#666666" style={{ stroke: '#666666', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M641.001 65L641.001 79.7742C641.001 81.4187 642.007 82.8955 643.538 83.497L866.19 171.003C867.72 171.604 868.727 173.081 868.727 174.726L868.725 261.5" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <rect x="553.5" y="18.2847" width="37" height="36" rx="6" fill="black" fillOpacity="0.02" />
              <rect x="553.302" y="18.087" width="37.3954" height="36.3954" rx="6.1977" stroke="black" strokeOpacity="0.16" strokeWidth="0.395405" />
              <path fillRule="evenodd" clipRule="evenodd" d="M566.5 30.0972C564.981 30.0972 563.75 31.3284 563.75 32.8472V39.7222C563.75 41.241 564.981 42.4722 566.5 42.4722H577.5C579.019 42.4722 580.25 41.241 580.25 39.7222V32.8472C580.25 31.3284 579.019 30.0972 577.5 30.0972H566.5ZM565.805 31.6603C566.009 31.5407 566.247 31.4722 566.5 31.4722H577.5C577.753 31.4722 577.991 31.5407 578.195 31.6603L572.42 36.1222C572.173 36.3136 571.827 36.3136 571.58 36.1222L565.805 31.6603ZM565.125 32.8723V39.7222C565.125 40.4816 565.741 41.0972 566.5 41.0972H577.5C578.259 41.0972 578.875 40.4816 578.875 39.7222V32.8723L573.261 37.2103C572.518 37.7842 571.482 37.7842 570.739 37.2103L565.125 32.8723Z" fill="black" fillOpacity="0.6" />
              <rect x="598.5" y="18.2847" width="38" height="36" rx="6" fill="black" fillOpacity="0.02" />
              <rect x="598.302" y="18.087" width="38.3954" height="36.3954" rx="6.1977" stroke="black" strokeOpacity="0.16" strokeWidth="0.395405" />
              <path fillRule="evenodd" clipRule="evenodd" d="M614.062 27.3472C614.442 27.3472 614.75 27.655 614.75 28.0347V29.4097H620.25V28.0347C620.25 27.655 620.558 27.3472 620.938 27.3472C621.317 27.3472 621.625 27.655 621.625 28.0347V29.4097H622.312C623.831 29.4097 625.062 30.6409 625.062 32.1597V41.0972C625.062 42.616 623.831 43.8472 622.312 43.8472H612.688C611.169 43.8472 609.938 42.616 609.938 41.0972V32.1597C609.938 30.6409 611.169 29.4097 612.688 29.4097H613.375V28.0347C613.375 27.655 613.683 27.3472 614.062 27.3472ZM612.688 30.7847C611.928 30.7847 611.312 31.4003 611.312 32.1597V34.2222H623.688V32.1597C623.688 31.4003 623.072 30.7847 622.312 30.7847H612.688ZM623.688 35.5972H611.312V41.0972C611.312 41.8566 611.928 42.4722 612.688 42.4722H622.312C623.072 42.4722 623.688 41.8566 623.688 41.0972V35.5972Z" fill="black" fillOpacity="0.6" />
              <rect x="644.5" y="18.2847" width="38" height="36" rx="6" fill="black" fillOpacity="0.02" />
              <rect x="644.302" y="18.087" width="38.3954" height="36.3954" rx="6.1977" stroke="black" strokeOpacity="0.16" strokeWidth="0.395405" />
              <path d="M661.781 29.4097C661.781 29.03 661.473 28.7222 661.094 28.7222C660.714 28.7222 660.406 29.03 660.406 29.4097V43.1597C660.406 43.5394 660.714 43.8472 661.094 43.8472C661.473 43.8472 661.781 43.5394 661.781 43.1597V29.4097Z" fill="black" fillOpacity="0.6" />
              <path d="M665.562 30.7847C665.942 30.7847 666.25 31.0925 666.25 31.4722V41.0972C666.25 41.4769 665.942 41.7847 665.562 41.7847C665.183 41.7847 664.875 41.4769 664.875 41.0972V31.4722C664.875 31.0925 665.183 30.7847 665.562 30.7847Z" fill="black" fillOpacity="0.6" />
              <path d="M657.312 33.5347C657.312 33.155 657.005 32.8472 656.625 32.8472C656.245 32.8472 655.938 33.155 655.938 33.5347V39.0347C655.938 39.4144 656.245 39.7222 656.625 39.7222C657.005 39.7222 657.312 39.4144 657.312 39.0347V33.5347Z" fill="black" fillOpacity="0.6" />
              <path d="M670.719 34.9097C670.719 34.53 670.411 34.2222 670.031 34.2222C669.652 34.2222 669.344 34.53 669.344 34.9097V37.6597C669.344 38.0394 669.652 38.3472 670.031 38.3472C670.411 38.3472 670.719 38.0394 670.719 37.6597V34.9097Z" fill="black" fillOpacity="0.6" />
              <rect x="690.5" y="18.2847" width="38" height="36" rx="6" fill="black" fillOpacity="0.02" />
              <rect x="690.302" y="18.087" width="38.3954" height="36.3954" rx="6.1977" stroke="black" strokeOpacity="0.16" strokeWidth="0.395405" />
              <path d="M703.312 29.4097C703.312 29.03 703.005 28.7222 702.625 28.7222C702.245 28.7222 701.938 29.03 701.938 29.4097V42.4722C701.938 43.2316 702.553 43.8472 703.312 43.8472H716.375C716.755 43.8472 717.062 43.5394 717.062 43.1597C717.062 42.78 716.755 42.4722 716.375 42.4722H703.312V29.4097Z" fill="black" fillOpacity="0.6" />
              <path d="M716.916 31.8969C717.15 31.5984 717.098 31.1662 716.8 30.9316C716.501 30.697 716.069 30.7489 715.834 31.0474L712.4 35.419L709.885 34.1617C709.377 33.9077 708.765 33.9921 708.345 34.3741L704.913 37.4947C704.632 37.7501 704.611 38.1849 704.866 38.4659C705.122 38.7468 705.557 38.7675 705.837 38.5121L709.27 35.3915L711.785 36.6488C712.369 36.9408 713.077 36.7818 713.481 36.2685L716.916 31.8969Z" fill="black" fillOpacity="0.6" />
              <rect x="802.719" y="222" width="122.569" height="122.569" rx="12" fill="#F5F5F5" style={{ fill: 'color(display-p3 0.9608 0.9608 0.9608)', fillOpacity: 1 }} />
              <rect x="802.969" y="222.25" width="122.069" height="122.069" rx="11.75" stroke="black" strokeOpacity="0.5" strokeWidth="0.5" />
              <defs>
                <clipPath id="clip0_580_35451">
                  <rect width="111.754" height="111.754" rx="6" transform="matrix(-1 0 0 1 919.875 227.407)" fill="white" />
                </clipPath>
              </defs>
              <g clipPath="url(#clip0_580_35451)">
                <rect width="111.754" height="111.754" rx="6" transform="matrix(-1 0 0 1 919.875 227.407)" fill="#F5F5F5" style={{ fill: 'color(display-p3 0.9608 0.9608 0.9608)', fillOpacity: 1 }} />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 845.555 44.5605)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 843.813 46.299299999999995)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 842.0709999999999 48.0381)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 840.329 49.7769)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 838.587 51.515699999999995)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 836.8449999999999 53.25449999999999)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 835.103 54.9933)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 833.361 56.732099999999996)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 831.6189999999999 58.4709)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 829.877 60.2097)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 828.135 61.948499999999996)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 826.3929999999999 63.68729999999999)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 824.651 65.42609999999999)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 822.909 67.16489999999999)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 821.1669999999999 68.9037)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 819.425 70.6425)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 817.683 72.3813)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 815.9409999999999 74.1201)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 814.199 75.85889999999999)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 812.457 77.5977)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 810.7149999999999 79.3365)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 808.973 81.0753)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 807.231 82.8141)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 805.4889999999999 84.5529)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 803.747 86.29169999999999)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 802.005 88.03049999999999)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 800.2629999999999 89.76929999999999)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 798.521 91.50809999999998)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 796.779 93.2469)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 795.0369999999999 94.9857)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 793.295 96.72449999999999)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 791.553 98.4633)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 789.8109999999999 100.2021)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 788.069 101.9409)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 786.327 103.6797)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 784.5849999999999 105.4185)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 782.843 107.15729999999999)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 781.101 108.89609999999999)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 779.3589999999999 110.63489999999999)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 777.617 112.37369999999999)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 775.875 114.11249999999998)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 774.1329999999999 115.85129999999998)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 772.391 117.5901)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 770.6489999999999 119.3289)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 768.9069999999999 121.0677)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 767.165 122.8065)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 765.423 124.5453)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 763.6809999999999 126.2841)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 761.939 128.0229)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 760.1969999999999 129.7617)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 758.4549999999999 131.5005)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 756.713 133.2393)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 754.971 134.97809999999998)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 753.2289999999999 136.71689999999998)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 751.487 138.45569999999998)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 749.7449999999999 140.1945)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 748.0029999999999 141.9333)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 746.261 143.6721)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 744.519 145.4109)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 742.7769999999999 147.1497)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 741.035 148.8885)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 739.2929999999999 150.6273)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 737.5509999999999 152.3661)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 735.809 154.1049)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 734.067 155.84369999999998)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 732.3249999999999 157.58249999999998)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 730.583 159.32129999999998)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 728.8409999999999 161.06009999999998)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 727.0989999999999 162.7989)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 725.357 164.5377)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 723.615 166.2765)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 721.8729999999999 168.0153)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 720.131 169.7541)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 718.3889999999999 171.4929)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 716.6469999999999 173.2317)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 714.905 174.9705)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 713.163 176.70929999999998)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 711.4209999999999 178.44809999999998)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 709.679 180.18689999999998)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 707.9369999999999 181.92569999999998)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 706.1949999999999 183.66449999999998)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 704.453 185.40329999999997)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 702.711 187.14209999999997)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 700.9689999999999 188.88089999999997)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 699.227 190.6197)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 697.4849999999999 192.3585)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 695.7429999999999 194.0973)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 694.001 195.8361)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 692.259 197.57489999999999)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 690.5169999999999 199.31369999999998)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 688.775 201.05249999999998)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 687.0329999999999 202.79129999999998)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 685.2909999999999 204.53009999999998)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 683.549 206.26889999999997)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 681.807 208.00769999999997)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 680.0649999999999 209.74649999999997)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 678.323 211.4853)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 676.5809999999999 213.2241)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 674.8389999999999 214.9629)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 673.097 216.7017)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" strokeDasharray="0.5 0.5" />
              </g>
              <rect x="-0.25" y="0.25" width="111.254" height="111.254" rx="5.75" transform="matrix(-1 0 0 1 919.375 227.407)" stroke="#666666" style={{ stroke: 'color(display-p3 0.4000 0.4000 0.4000)', strokeOpacity: 1 }} strokeWidth="0.5" />
              <path d="M866.071 274.234V280.269L889.234 266.895V260.86L866.071 274.234Z" fill="#F5F5F5" style={{ fill: 'color(display-p3 0.9608 0.9608 0.9608)', fillOpacity: 1 }} />
              <path d="M860.744 280.269L837.58 266.895V260.86L860.744 274.234V280.269Z" fill="#F5F5F5" style={{ fill: 'color(display-p3 0.9608 0.9608 0.9608)', fillOpacity: 1 }} />
              <path d="M889.234 306.367V300.333L866.071 286.959V292.993L889.234 306.367Z" fill="#F5F5F5" style={{ fill: 'color(display-p3 0.9608 0.9608 0.9608)', fillOpacity: 1 }} />
              <path d="M860.744 292.993V286.959L837.58 300.333V306.367L860.744 292.993Z" fill="#F5F5F5" style={{ fill: 'color(display-p3 0.9608 0.9608 0.9608)', fillOpacity: 1 }} />
              <path d="M866.32 292.848L888.984 305.934V300.478L866.32 287.392V292.848ZM837.83 300.478V305.934L860.494 292.848V287.392L837.83 300.478ZM866.32 274.379V279.835L888.984 266.749V261.293L866.32 274.379ZM837.83 266.749L860.494 279.835V274.379L837.83 261.293V266.749Z" stroke="black" strokeOpacity="0.5" strokeWidth="0.5" />
              <rect x="878" y="516" width="430" height="40" rx="10" fillOpacity="0.1" style={{ fill: '#80BFFF' }} />
              <rect x="878.25" y="516.25" width="429.5" height="39.5" rx="9.75" strokeOpacity="0.2" style={{ stroke: '#80BFFF' }} strokeWidth="0.5" />
              <svg width="16" height="16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" x="892" y="527">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.07497 33.7873C7.64834 28.0882 9.26942 22.424 12.6466 17.8135L15.8735 20.1772C13.0592 24.0193 11.7083 28.7395 12.0638 33.4887C12.4193 38.2379 14.4579 42.7044 17.8129 46.0846C21.1678 49.4649 25.6189 51.537 30.3653 51.9281C35.1117 52.3193 39.8419 51.0039 43.705 48.2185L46.0444 51.4631C41.4087 54.8055 35.7324 56.384 30.0367 55.9146C24.341 55.4452 18.9998 52.9587 14.9738 48.9024C10.9479 44.8462 8.50159 39.4864 8.07497 33.7873ZM33.501 12.0515C28.7518 11.696 24.0316 13.0469 20.1895 15.8612L17.8258 12.6343C22.4363 9.25713 28.1005 7.63605 33.7996 8.06268C39.4987 8.48931 44.8584 10.9356 48.9147 14.9615C52.971 18.9875 55.4575 24.3287 55.9269 30.0244C56.3963 35.7201 54.8178 41.3964 51.4754 46.0321L48.2308 43.6927C51.0162 39.8296 52.3316 35.0994 51.9404 30.353C51.5492 25.6066 49.4772 21.1555 46.0969 17.8006C42.7167 14.4456 38.2502 12.407 33.501 12.0515Z" fill="currentColor" style={{ color: '#80BFFF' }} />
              </svg>
              <text x="917" y="540" fill="#80BFFF" fontSize="13" letterSpacing="0.3px" fontFamily="inter, -apple-system, sans-serif">
                Generating follow-up response
              </text>
            </svg>
          </div>

          {/* Chat Interface Demo */}
          <div className="space-y-6">
            {/* User Message */}
            <div className="flex justify-start">
              <div className="rounded-xl bg-black/[0.04] dark:bg-white/[0.04] px-5 py-3 max-w-[427px] max-[767px]:max-w-[100%]">
                <p className="text-[17px] leading-6 tracking-[0.19px] text-foreground">
                  How can we increase sales by 30% next quarter?
                </p>
              </div>
            </div>

            {/* AI Response Steps */}
            <div className="space-y-4 pl-4">
              {/* Step 1 */}
              <div className="flex items-start max-[767px]:items-center gap-4">
                <Check className="w-6 h-6 text-foreground flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[17px] leading-6 tracking-[0.19px] text-muted-foreground mb-4">
                    Analyze current sales data from CRM
                  </p>
                  <div className="inline-flex items-center gap-2 px-2 py-2 rounded-lg border border-black/12">
                    <Search className="w-5 h-5 text-foreground" />
                    <span className="text-[14px] text-foreground">Analyzing</span>
                    <span className="text-[14px] text-muted-foreground">
                      150 leads from Q3 2025
                    </span>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start max-[767px]:items-center gap-4">
                <Check className="w-6 h-6 text-foreground flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[17px] leading-6 tracking-[0.19px] text-muted-foreground mb-4">
                    Generate SMM content plan for Instagram
                  </p>
                  <div className="inline-flex items-center gap-2 px-2 py-2 rounded-lg border border-black/12">
                    <File className="w-5 h-5 text-foreground" />
                    <span className="text-[14px] text-foreground">
                      Creating file
                    </span>
                    <span className="text-[14px] text-muted-foreground">
                      smm_content_plan.txt
                    </span>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start max-[767px]:items-center gap-4">
                <Check className="w-6 h-6 text-foreground flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[17px] leading-6 tracking-[0.19px] text-muted-foreground mb-4">
                    Optimize Telegram bot for orders
                  </p>
                  <div className="inline-flex items-center gap-2 px-2 py-2 rounded-lg border border-black/12">
                    <Search className="w-5 h-5 text-foreground" />
                    <span className="text-[14px] text-foreground">Optimizing</span>
                    <span className="text-[14px] text-muted-foreground">
                      Bot integrations with Payme
                    </span>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start max-[767px]:items-center gap-4">
                <Check className="w-6 h-6 text-foreground flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[17px] leading-6 tracking-[0.19px] text-muted-foreground mb-4">
                    Forecast ROI from new website
                  </p>
                  <div className="inline-flex items-center gap-2 px-2 py-2 rounded-lg border border-black/12">
                    <File className="w-5 h-5 text-foreground" />
                    <span className="text-[14px] text-foreground">
                      Updating file
                    </span>
                    <span className="text-[14px] text-muted-foreground">
                      roi_forecast.txt
                    </span>
                  </div>
                </div>
              </div>

              {/* Loading Step */}
              <div className="flex items-start max-[767px]:items-center gap-4">
                <RotateCw className="w-6 h-6 text-foreground flex-shrink-0 mt-1 animate-spin" />
                <p className="text-[17px] leading-6 tracking-[0.19px] text-muted-foreground">
                  Integrating with local payments
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="final-cta" ref={ctaRef} className="px-6 pt-[120px] pb-[220px] text-center ">
        <div className="max-w-[403px] mx-auto">
          <h2 className="text-[29px] font-medium leading-[38px] tracking-[-0.16px] text-foreground mb-7">
            Get started with Next Step Agency
          </h2>
          <button className="inline-flex items-center justify-center gap-6 px-4 py-3 rounded-md bg-black/[0.04] dark:bg-white/[0.04] text-[11px] font-medium text-muted-foreground tracking-[0.24px] hover:bg-black/[0.06] dark:hover:bg-white/[0.06] transition-colors">
            <span>Request audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-6 border-t border-black/6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-medium text-muted-foreground">
          <div>
            <span>All rights reserved ©2025</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground transition-colors">
              Support
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Telegram
            </a>
          </div>
        </div>
      </footer>

      <style>{`
        html {
          transition: color 0.6s ease, background-color 0.6s ease;
        }
      `}</style>
    </div>
  );
}