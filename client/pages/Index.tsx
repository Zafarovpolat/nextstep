import { ArrowRight, Check, Search, File, RotateCw } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Header */}
      <header className="w-full bg-white/[0.04] backdrop-blur-sm">
        <div className="flex h-10 items-center justify-center px-5">
          <div className="flex w-full max-w-[350px] items-center justify-between rounded-[10px] bg-black/[0.04] px-5 py-[11px]">
            {/* Logo */}
            <div className="flex items-center">
              <svg width="87" height="16" viewBox="0 0 88 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1_397)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M15.9183 4.11569C16.4715 4.11569 17.0021 4.23434 17.5101 4.4716C18.0181 4.70886 18.4077 5.02512 18.6786 5.42053V4.2513H20.2535V13.1994C20.2535 13.8095 20.1236 14.3406 19.864 14.7926C19.6043 15.2558 19.2317 15.6116 18.7463 15.8601C18.2722 16.12 17.719 16.25 17.0868 16.25H13.0055V14.928H16.9343C17.4536 14.928 17.8714 14.7586 18.1875 14.4197C18.5149 14.0807 18.6786 13.64 18.6786 13.0977V11.6912C18.4641 12.064 18.1028 12.3634 17.5947 12.5894C17.0867 12.8153 16.5222 12.9283 15.9013 12.9283C15.0546 12.9283 14.3264 12.7419 13.7167 12.3691C13.1184 11.9849 12.6555 11.4594 12.3281 10.7928C12.012 10.1263 11.8541 9.36924 11.8541 8.52191C11.8541 7.67457 12.012 6.91757 12.3281 6.251C12.6555 5.58441 13.1241 5.06475 13.7337 4.69191C14.3433 4.30777 15.0716 4.11569 15.9183 4.11569ZM16.1384 5.52237C15.6078 5.52237 15.1392 5.64652 14.7328 5.89508C14.3377 6.14364 14.0272 6.49393 13.8014 6.94585C13.5869 7.39776 13.4797 7.92314 13.4796 8.52191C13.4796 9.43705 13.7168 10.1658 14.1909 10.7081C14.6764 11.2505 15.3256 11.5216 16.1384 11.5216C16.669 11.5216 17.1319 11.3973 17.5271 11.1488C17.9335 10.9002 18.244 10.5501 18.4585 10.0982C18.6843 9.64622 18.7972 9.12072 18.7972 8.52191C18.7972 7.60679 18.5544 6.87799 18.0689 6.33569C17.5835 5.79341 16.94 5.52237 16.1384 5.52237Z" fill="black"/>
                  <path d="M79.402 9.35955L72.8182 13.1511V11.4404L79.402 7.64893V9.35955Z" fill="black"/>
                  <path d="M87.5 11.4404V13.1511L80.916 9.35955V7.64893L87.5 11.4404Z" fill="black"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M50.4718 4.11569C51.3185 4.1157 52.0411 4.29643 52.6394 4.65796C53.2378 5.0195 53.695 5.51097 54.0111 6.13236C54.3385 6.74246 54.5021 7.41482 54.5021 8.1492C54.5021 8.38644 54.4909 8.60676 54.4684 8.81011H47.9288C47.9652 9.26766 48.0732 9.68572 48.2533 10.0642C48.4904 10.5387 48.8122 10.9059 49.2187 11.1657C49.6364 11.4256 50.1048 11.5556 50.6241 11.5556C51.2563 11.5556 51.7758 11.4256 52.1822 11.1657C52.5886 10.8946 52.8539 10.5104 52.9781 10.0133H54.57C54.4232 10.8946 53.9941 11.6008 53.2829 12.1318C52.5716 12.6628 51.6853 12.9283 50.6241 12.9283C49.7774 12.9283 49.0323 12.7249 48.3888 12.3182C47.7453 11.9114 47.2486 11.3691 46.8986 10.6912C46.5486 10.0133 46.3735 9.27331 46.3735 8.47117C46.3735 7.6577 46.5373 6.92326 46.8647 6.26797C47.1921 5.61267 47.6663 5.09302 48.2872 4.70888C48.9082 4.31345 49.6364 4.11569 50.4718 4.11569ZM50.4718 5.40373C49.9412 5.40373 49.4783 5.52238 49.0832 5.75965C48.6993 5.99691 48.4056 6.34702 48.2024 6.81024C48.105 7.0397 48.0325 7.29401 47.9846 7.57298H52.8933C52.8369 6.89512 52.5942 6.36408 52.1652 5.97995C51.7475 5.59582 51.183 5.40375 50.4718 5.40373Z" fill="black"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M67.2852 12.7927H65.7104V11.4877C65.4507 11.917 65.0668 12.2673 64.5588 12.5385C64.0508 12.7983 63.5088 12.9283 62.933 12.9283C62.0863 12.9283 61.3581 12.7419 60.7485 12.3691C60.1501 11.9849 59.6872 11.4594 59.3598 10.7928C59.0437 10.1263 58.8858 9.36925 58.8858 8.52192C58.8858 7.67458 59.0437 6.91758 59.3598 6.25101C59.6872 5.58442 60.1558 5.06476 60.7654 4.69192C61.3751 4.30778 62.1033 4.1157 62.95 4.1157C63.5145 4.1157 64.0451 4.24554 64.5418 4.50539C65.0499 4.76524 65.4394 5.10987 65.7104 5.53918V0.692352H67.2852V12.7927ZM63.1701 5.52238C62.6395 5.52238 62.1709 5.64653 61.7645 5.89509C61.3694 6.13235 61.0589 6.48264 60.8331 6.94586C60.6186 7.39777 60.5114 7.92315 60.5114 8.52192C60.5114 9.43706 60.7485 10.1658 61.2227 10.7081C61.7081 11.2505 62.3573 11.5216 63.1701 11.5216C63.7007 11.5216 64.1637 11.403 64.5588 11.1657C64.9652 10.9172 65.2757 10.5669 65.4902 10.115C65.716 9.65175 65.8289 9.12069 65.8289 8.52192C65.8289 7.6068 65.5861 6.878 65.1007 6.3357C64.6152 5.79342 63.9717 5.52238 63.1701 5.52238Z" fill="black"/>
                  <path d="M2.21038 11.2844H8.00212V12.7927H0.5V0.929626H2.21038V11.2844Z" fill="black"/>
                  <path d="M10.4771 12.7927H8.90222V4.25131H10.4771V12.7927Z" fill="black"/>
                  <path d="M23.5968 5.79343C23.8226 5.25116 24.1782 4.83875 24.6636 4.55631C25.149 4.26256 25.7192 4.11571 26.374 4.1157C27.0062 4.1157 27.5595 4.26255 28.0336 4.55631C28.5191 4.83876 28.8916 5.23995 29.1513 5.75966C29.4222 6.26806 29.5576 6.86686 29.5576 7.55602V12.7927H27.9658V7.84404C27.9658 7.15488 27.7795 6.60131 27.407 6.18329C27.0344 5.75396 26.549 5.53918 25.9507 5.53918C25.4991 5.53918 25.0927 5.65219 24.7314 5.87812C24.3815 6.10407 24.1048 6.41483 23.9016 6.81025C23.6984 7.20566 23.5968 7.65762 23.5968 8.16601V12.7927H22.0218V0.692352H23.5968V5.79343Z" fill="black"/>
                  <path d="M33.558 4.2513H36.0981V5.62404H33.558V9.97951C33.558 10.4314 33.6709 10.7872 33.8967 11.0471C34.1338 11.2956 34.4611 11.42 34.8789 11.42H36.0981V12.7927H34.7603C33.9023 12.7927 33.2193 12.5497 32.7112 12.0639C32.2145 11.5668 31.9662 10.8832 31.9662 10.0133V5.62404H30.2049V4.2513H31.475C31.8024 4.2513 31.9662 4.08742 31.9662 3.75978V1.57355H33.558V4.2513Z" fill="black"/>
                  <path d="M42.5128 2.06509H41.2257C40.8306 2.06509 40.5144 2.19492 40.2774 2.45477C40.0403 2.70333 39.9217 3.03676 39.9217 3.45479V4.25131H45.0361V12.7927H43.4442V5.62405H39.9217V12.7927H38.3299V5.62405H36.5857V4.25131H38.3299V3.40387C38.3299 2.86161 38.4428 2.38711 38.6686 1.9804C38.8944 1.56237 39.2162 1.24596 39.6339 1.03129C40.0629 0.805328 40.5597 0.692352 41.1242 0.692352H42.5128V2.06509Z" fill="black"/>
                  <path d="M57.5088 12.7927H55.934V0.692352H57.5088V12.7927Z" fill="black"/>
                  <path d="M79.402 4.04151V5.75213L72.8182 1.96062V0.25L79.402 4.04151Z" fill="black"/>
                  <path d="M87.5 1.96062L80.916 5.75213V4.04151L87.5 0.25V1.96062Z" fill="black"/>
                  <path d="M10.5787 2.72599H8.80066V0.692352H10.5787V2.72599Z" fill="black"/>
                </g>
                <defs>
                  <clipPath id="clip0_1_397">
                    <rect width="87" height="16" fill="white" transform="translate(0.5 0.25)"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            
            {/* Navigation */}
            <div className="flex items-center gap-4 text-[11px] font-medium text-black/60">
              <a href="#" className="hover:text-black/80 transition-colors">Jobs</a>
              <a href="#" className="hover:text-black/80 transition-colors">Request access</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full px-6 pt-[200px] pb-[100px]">
        {/* Background Image */}
        <div className="absolute inset-0 -top-5">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/1ef73dec34dc25e28409fe90b811d7557475634c?width=2850" 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F5F5F5] to-[rgba(212,224,236,0.4)]"></div>
        </div>
        
        <div className="relative z-10 max-w-[896px] mx-auto text-center">
          {/* Beta Badge */}
          <div className="inline-flex items-center justify-center px-2 py-1 rounded-md border border-black/12 mb-10">
            <span className="text-[10px] font-medium text-black/60 tracking-[0.22px]">Currently in beta</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-[35px] font-medium leading-[47px] tracking-[-0.585px] text-black/85 mb-6">
            <span>The CRM that remembers </span>
            <br />
            <span>everything, then acts on it.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-[15px] leading-6 text-black/50 max-w-[540px] mx-auto mb-12">
            Lightfield creates continuous, complete customer memory to keep records up 
            to date, prepare for meetings, and automate follow-up work.
          </p>

          {/* CTA Button */}
          <button className="inline-flex items-center justify-center gap-6 px-4 py-3 rounded-md bg-black/[0.04] text-[11px] font-medium text-black/60 tracking-[0.24px] hover:bg-black/[0.06] transition-colors">
            <span>Request access</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Interface Screenshot */}
      <section className="px-6 pb-[120px]">
        <div className="max-w-[1280px] mx-auto">
          <div className="rounded-[10px] border border-black/6 bg-white/0 shadow-[0_2px_32px_0_rgba(0,0,0,0.04)] overflow-hidden">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/29d0001f4327698ec89b1c108e5761fed3061396?width=2556" 
              alt="Lightfield CRM Interface" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Feature Section 1: Structured Signal */}
      <section className="px-6 py-[120px]">
        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-[29px] font-medium leading-[38px] tracking-[-0.16px] text-black/85 mb-2">
                Structured signal from
                <br />
                full-fidelity capture.
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-[14px] leading-6 tracking-[0.15px] text-black/50">
                Capture every single customer interaction automatically. 
                From meetings and emails to customer support tickets and 
                product analytics.
              </p>
              <p className="text-[14px] leading-6 tracking-[0.15px] text-black/50">
                Lightfield losslessly stores everything about your 
                relationship with customer, ensuring that no follow up or 
                valuable insight slips through the cracks.
              </p>
            </div>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="relative mt-[200px] h-[650px] overflow-hidden">
          <svg className="absolute left-[-30px] top-[50px] w-[1500px] h-[650px]" viewBox="0 0 1425 651" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.2">
              <path d="M1385.38 72.3052L1301.63 325.66L1385.38 579.015L1469.13 325.66L1385.38 72.3052Z" fill="#F5F5F5" stroke="#666666" strokeWidth="0.65445"/>
              <path d="M1301.57 324.85L1385.65 579.202" stroke="#666666" strokeWidth="0.65445"/>
              <path d="M1315.53 282.625L1399.61 536.977" stroke="#666666" strokeWidth="0.65445"/>
            </g>
            <g opacity="0.5">
              <path d="M1333.03 72.3052L1249.28 325.66L1333.03 579.015L1416.78 325.66L1333.03 72.3052Z" fill="#F5F5F5" stroke="#666666" strokeWidth="0.65445"/>
            </g>
            <path d="M1280.66 72.3086L1196.91 325.664L1280.66 579.019L1364.41 325.664L1280.66 72.3086Z" fill="#F5F5F5" stroke="#666666" strokeWidth="0.65445"/>
            <path d="M729.093 325.457L1300.65 518.301" stroke="#666666" strokeWidth="0.4363"/>
            <path d="M-29.1972 576.352L711.64 325.043" stroke="#666666" strokeWidth="0.4363"/>
            <ellipse cx="719.127" cy="325.25" rx="43.848" ry="136.78" fill="#F5F5F5" stroke="#666666" strokeWidth="0.4363" strokeDasharray="1.75 1.75"/>
            <ellipse cx="713.892" cy="325.25" rx="43.848" ry="136.78" fill="#F5F5F5" stroke="#666666" strokeWidth="0.4363"/>
          </svg>
        </div>
      </section>

      {/* Feature Section 2: Productivity */}
      <section className="px-6 py-[120px] relative">
        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-[29px] font-medium leading-[38px] tracking-[-0.16px] text-black/85 mb-2">
                Productivity powered
                <br />
                by your CRM.
              </h2>
            </div>
            <div>
              <p className="text-[14px] leading-6 tracking-[0.15px] text-black/50">
                Experience the next generation of productivity with our AI-
                powered CRM. Lightfield's advanced algorithms analyze 
                patterns and automate workflows, helping you focus on 
                what matters most - building meaningful customer 
                relationships.
              </p>
            </div>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute left-[-178px] top-[159px] w-[1950px] h-[639px] transform rotate-[40deg] overflow-hidden">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/ee636a88f82fab1ba06acaf6e264a545114e17ad?width=3900" 
            alt="" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
      </section>

      {/* Feature Section 3: Grounded Answers */}
      <section className="px-6 py-[120px]">
        <div className="max-w-[970px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-[72px]">
            <div>
              <h2 className="text-[29px] font-medium leading-[38px] tracking-[-0.16px] text-black/85 mb-2">
                Grounded answers
                <br />
                to hard questions.
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-[14px] leading-6 tracking-[0.15px] text-black/50">
                Ask questions in natural language to uncover insights 
                across your customer data.
              </p>
              <p className="text-[14px] leading-6 tracking-[0.15px] text-black/50">
                Lightfield digs through structured CRM objects and heaps 
                of unstructured customer conversations, allowing you to 
                precisely hone your product roadmap and go to market 
                motion with simple and real time queries.
              </p>
            </div>
          </div>

          {/* Chat Interface Demo */}
          <div className="space-y-6">
            {/* User Message */}
            <div className="flex justify-start">
              <div className="rounded-xl bg-black/[0.04] px-5 py-3 max-w-[427px]">
                <p className="text-[17px] leading-6 tracking-[0.19px] text-black/85">
                  How has our ICP changed in the past quarter?
                </p>
              </div>
            </div>

            {/* AI Response Steps */}
            <div className="space-y-4 pl-4">
              {/* Step 1 */}
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[17px] leading-6 tracking-[0.19px] text-black/75 mb-4">
                    Fetch closed won opportunities from previous quarter
                  </p>
                  <div className="inline-flex items-center gap-2 px-2 py-2 rounded-lg border border-black/12">
                    <Search className="w-5 h-5 text-black" />
                    <span className="text-[14px] text-black/85">Analyzing</span>
                    <span className="text-[14px] text-black/50">13 opportunities from Q1 2025</span>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[17px] leading-6 tracking-[0.19px] text-black/75 mb-4">
                    Compute company characteristics for 13 accounts
                  </p>
                  <div className="inline-flex items-center gap-2 px-2 py-2 rounded-lg border border-black/12">
                    <File className="w-5 h-5 text-black" />
                    <span className="text-[14px] text-black/85">Creating file</span>
                    <span className="text-[14px] text-black/50">characteristics_summary.txt</span>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[17px] leading-6 tracking-[0.19px] text-black/75 mb-4">
                    Fetch closed won opportunities from this quarter
                  </p>
                  <div className="inline-flex items-center gap-2 px-2 py-2 rounded-lg border border-black/12">
                    <Search className="w-5 h-5 text-black" />
                    <span className="text-[14px] text-black/85">Analyzing</span>
                    <span className="text-[14px] text-black/50">23 opportunities from Q2 2025</span>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[17px] leading-6 tracking-[0.19px] text-black/75 mb-4">
                    Compute company characteristics for 23 accounts
                  </p>
                  <div className="inline-flex items-center gap-2 px-2 py-2 rounded-lg border border-black/12">
                    <File className="w-5 h-5 text-black" />
                    <span className="text-[14px] text-black/85">Editing file</span>
                    <span className="text-[14px] text-black/50">characteristics_summary.txt</span>
                  </div>
                </div>
              </div>

              {/* Loading Step */}
              <div className="flex items-start gap-4">
                <RotateCw className="w-6 h-6 text-black flex-shrink-0 mt-1 animate-spin" />
                <p className="text-[17px] leading-6 tracking-[0.19px] text-black/75">
                  Fetching opportunities closed won last quarter
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-6 py-[120px] text-center">
        <div className="max-w-[403px] mx-auto">
          <h2 className="text-[29px] font-medium leading-[38px] tracking-[-0.16px] text-black/85 mb-7">
            Get early access to Lightfield
          </h2>
          <button className="inline-flex items-center justify-center gap-6 px-4 py-3 rounded-md bg-black/[0.04] text-[11px] font-medium text-black/60 tracking-[0.24px] hover:bg-black/[0.06] transition-colors">
            <span>Request access</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-6 border-t border-black/6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-medium text-black/60">
          <div>
            <span>All rights reserved ©2025</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-black/80 transition-colors">Support</a>
            <a href="#" className="hover:text-black/80 transition-colors">Privacy</a>
            <a href="#" className="hover:text-black/80 transition-colors">Terms</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-black/80 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-black/80 transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
