import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Search, File, RotateCw, X } from "lucide-react";

export default function Index() {
  const ctaRef = useRef(null);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAuditOpen, setIsAuditOpen] = useState(false);

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
              <svg xmlns="http://www.w3.org/2000/svg" className="text-foreground" fill="currentColor" width="90" height="14" viewBox="0 0 90 14"><path transform="matrix(0.125 0 0 0.130841 0 -7.62939e-06)" d="M229.706 36.195C230.63 33.0585 233.54 28.3143 235.569 25.7437C243.566 15.6102 257.497 10.3707 270.155 12.8459C279.085 14.1599 287.548 19.835 292.894 27.0289C298.561 34.7107 300.922 44.3442 299.449 53.7799C297.961 63.885 293.049 71.7152 284.881 77.7767C277.251 83.373 267.716 85.7107 258.366 84.2772C248.89 82.8161 240.382 77.6477 234.71 69.9079C229.03 62.2423 226.601 52.6418 227.952 43.1933C228.296 40.9226 228.872 38.3168 229.706 36.195ZM267.374 70.5185C279.554 68.468 287.742 56.8864 285.624 44.7039C283.506 32.5215 271.891 24.3907 259.735 26.5811C247.677 28.7537 239.636 40.2678 241.737 52.3518C243.838 64.4358 255.292 72.5525 267.374 70.5185Z" /><path transform="matrix(0.125 0 0 0.130841 0 -7.62939e-06)" d="M247.073 37.2908L247.187 38.8409C243.979 43.5673 246.501 51.9355 244.877 53.5903C244.243 52.9949 244.308 51.0628 244.275 50.1688C244.077 44.807 243.878 41.7759 247.073 37.2908Z" /><path transform="matrix(0.125 0 0 0.130841 0 -7.62939e-06)" d="M247.073 37.2908C248.34 35.072 252.212 31.545 254.496 30.5977L255.125 30.7538C254.427 32.3057 248.108 35.2519 247.187 38.8409L247.073 37.2908Z" /><path transform="matrix(0.125 0 0 0.130841 0 -7.62939e-06)" d="M378.369 14.453C382.234 14.263 386.981 14.3839 390.888 14.4134C390.98 17.3208 390.956 20.4357 390.89 23.3548C390.45 42.9497 391.313 62.7645 390.858 82.3307L377.297 82.5155C377.022 77.2468 377.145 70.7231 377.106 65.3593C377.141 59.2751 377.51 46.949 376.687 41.5746C370.553 49.7523 363.273 65.5397 357.128 75.3663C354.32 75.4941 352.759 75.406 349.951 75.1663C343.437 66.491 335.802 51.422 329.807 41.7059C329.27 46.5732 329.446 53.0426 329.454 58.0343L329.443 82.3029L316.05 82.3993C315.825 59.7387 315.835 37.0763 316.081 14.4159C320.212 14.4174 324.342 14.441 328.472 14.4868C336.258 28.6644 346.164 43.203 353.893 57.7133C361.777 43.4432 370.197 28.5551 378.369 14.453Z" /><path transform="matrix(0.125 0 0 0.130841 0 -7.62939e-06)" d="M432.826 14.449C437.388 14.1544 443.094 14.31 447.665 14.431C449.679 19.8528 452.909 26.0844 455.314 31.4032C458.849 39.372 462.432 47.3193 466.063 55.2446C470.22 64.2372 474.489 73.0623 478.147 82.2808C472.974 82.4012 468.151 82.4944 462.977 82.3693C461.572 78.4103 458.697 72.3425 456.917 68.362C449.768 68.3798 442.636 68.5101 435.511 67.9104C438.02 53.8418 438.914 56.3114 451.937 56.3439C449.129 51.8094 445.9 43.4524 443.875 38.4923C442.921 41.6233 440.001 47.9527 438.605 51.2186C434.778 60.0427 431.013 68.8938 427.311 77.7712C426.604 79.4217 425.73 81.1199 424.932 82.7379C423.81 82.5473 422.033 82.4595 420.843 82.3688C425.988 70.4636 428.927 57.7932 435.126 46.2832C437.177 42.4748 440.325 37.9683 442.635 34.0329C442.009 32.1423 440.874 29.7385 440.055 27.8716C435.701 36.576 431.874 46.0488 428.045 54.9936C424.125 64.1449 420.067 73.2364 415.872 82.265C411.282 82.4314 406.689 82.4931 402.096 82.45C403.315 78.081 411.379 61.178 413.806 56.1878C420.352 42.7308 426.281 27.646 432.826 14.449Z" /><path transform="matrix(0.125 0 0 0.130841 0 -7.62939e-06)" d="M666.978 14.4413C671.973 14.3233 676.97 14.3034 681.965 14.3818C687.36 26.2125 692.671 38.0815 697.898 49.9879C702.676 60.5928 708 71.6793 712.513 82.3216C707.154 82.4499 702.157 82.5237 696.797 82.2367C694.851 77.4685 692.587 72.7508 690.599 67.9326C683.775 67.7556 676.752 68.1925 669.931 67.7448C670.942 64.1092 672.875 60.4882 673.99 56.5603C676.866 56.3112 683.103 56.321 685.969 56.5619C683.561 51.0371 679.608 43.4956 677.637 38.2007C673.089 51.7068 667.017 63.7395 661.631 76.7753C661.002 78.5597 659.972 80.6673 659.172 82.4184C657.729 82.4322 656.307 82.6295 655.286 81.7066C655.472 80.8282 659.425 71.8964 660.07 70.3984L669.41 49.0766C671.503 44.337 673.778 38.8466 676.26 34.3607L673.791 28.2996C666.31 45.9687 656.953 64.746 650.15 82.2318C645.642 82.482 641.296 82.431 636.788 82.4061C638.386 77.2044 644.828 63.7301 647.314 58.1812C653.723 43.5362 660.279 28.9555 666.978 14.4413Z" /><path transform="matrix(0.125 0 0 0.130841 0 -7.62939e-06)" d="M140.297 14.3774C144.6 14.5687 149.999 14.4561 154.385 14.482C154.661 18.7891 154.598 23.5467 154.625 27.8939C154.657 36.4543 154.707 45.0334 154.612 53.586C154.565 61.5001 152.116 70.6832 146.22 76.244C134.791 87.0211 112.008 85.8883 101.38 74.605C98.8273 71.8932 96.939 68.6249 95.8637 65.0577C92.6955 54.5957 93.7625 26.4803 94.1094 14.4112C98.9324 14.4491 103.756 14.4586 108.579 14.4395L108.657 36.5732C108.631 44.5651 108.331 50.6406 109.491 58.6551C111.878 75.1593 137.512 73.809 139.285 59.4336C141.045 45.169 139.713 29.0984 140.297 14.3774Z" /><path transform="matrix(0.125 0 0 0.130841 0 -7.62939e-06)" d="M633.559 71.6571C619.347 86.492 595.598 88.3483 580.554 73.8635C573.707 67.2497 569.732 58.2053 569.488 48.6828C569.302 39.6426 572.678 30.8924 578.886 24.3255C592.015 10.7085 616.768 9.06889 630.627 22.5059C631.594 23.4605 632.546 24.4296 633.484 25.413C630.577 28.0547 627.331 30.8914 624.601 33.6734C617.429 28.4544 611.641 25.0734 602.183 26.5556C596.692 27.4458 591.776 30.4768 588.51 34.9859C581.435 44.7823 583.687 59.7549 593.405 66.9146C598.14 70.4023 605.252 71.2108 610.949 70.2588C611.649 70.138 612.343 69.9886 613.031 69.8111C617.238 68.253 620.262 66.2466 623.553 63.2202C626.032 63.7428 629.98 69.6735 633.559 71.6571Z" /><path transform="matrix(0.125 0 0 0.130841 0 -7.62939e-06)" d="M164.472 14.436L224.003 14.5164C224.062 18.5172 224.196 22.4718 224.196 26.4799C217.855 26.7059 207.907 26.6198 201.503 26.2678C201.435 37.4239 201.489 48.5805 201.664 59.7354C201.728 66.8615 201.929 75.3054 201.468 82.3087C196.715 82.4544 191.814 82.4347 187.049 82.4742C186.793 63.9518 187.187 45.2799 186.967 26.7268C179.993 26.2682 171.391 26.518 164.359 26.6973C164.166 22.9112 164.384 18.286 164.472 14.436Z" /><path transform="matrix(0.125 0 0 0.130841 0 -7.62939e-06)" d="M470.038 14.4498C489.153 14.7993 509.154 14.4238 528.394 14.5098C528.673 18.4921 528.745 22.4862 528.61 26.476C522.479 26.7992 512.528 26.4878 506.263 26.3468C505.996 37.3318 505.97 48.3214 506.185 59.3076C506.246 66.9414 506.261 74.5756 506.23 82.2096C501.605 82.435 496.73 82.3677 492.082 82.3761C491.331 64.4561 491.926 44.6209 491.753 26.4838L469.926 26.4277C469.808 22.2364 469.896 18.6189 470.038 14.4498Z" /><path transform="matrix(0.125 0 0 0.130841 0 -7.62939e-06)" d="M57.6739 15.6773C58.7942 16.9757 62.3431 25.5413 63.2358 27.6482C71.0041 45.9827 79.3087 64.1831 86.8646 82.5986C84.3728 82.3208 74.4181 82.6041 71.3074 82.6215C69.7456 77.8408 67.1793 73.303 65.5381 68.1648C58.3945 68.0824 51.7156 68.3257 44.5538 67.9354C46.2189 64.0593 47.6507 60.6193 49.1065 56.6391C52.6444 56.4683 56.8217 56.5834 60.4699 56.512L60.6783 56.1595L60.0642 54.4463C57.5003 48.7114 55.1142 43.2819 52.9224 37.372C51.4971 42.4089 46.2053 52.6551 44.0432 58.0599C41.0773 64.8254 38.4488 71.7532 35.3973 78.4769C34.6127 80.2055 32.4855 82.7994 30.4048 82.5231L30.0652 81.7566C30.1872 79.2903 32.8562 74.0993 33.9349 71.4145C41.6157 52.7371 49.5293 34.1566 57.6739 15.6773Z" /><path transform="matrix(0.125 0 0 0.130841 0 -7.62939e-06)" d="M539.987 14.4667L554.117 14.4856C554.575 19.5581 554.243 32.3338 554.266 37.8975C554.394 52.6861 554.415 67.4755 554.329 82.2645C549.687 82.431 544.691 82.3641 540.02 82.3844C539.412 61.3307 539.618 35.6736 539.987 14.4667Z" /><path transform="matrix(0.125 0 0 0.130841 0 -7.62939e-06)" d="M49.8839 14.0269C51.1816 14.0493 52.6517 13.9853 53.9642 13.9561C50.8741 22.284 46.3649 31.4412 42.8541 39.7349C36.8423 53.9373 30.9206 68.4421 24.4761 82.4333L20.1776 81.8865C25.9858 69.1668 31.2827 55.9215 36.8881 43.0656C41.1427 33.3077 45.6444 23.7389 49.8839 14.0269Z" /><path transform="matrix(0.125 0 0 0.130841 0 -7.62939e-06)" d="M40.7274 14.0833C42.0813 14.0817 43.5549 13.9989 44.9189 13.9473C42.5692 20.0771 39.562 26.6804 37.022 32.798C30.2399 49.511 23.1062 66.0788 15.6258 82.4905C15.4014 82.5164 15.1761 82.5328 14.9504 82.5398C13.6379 82.5707 13.2903 82.4053 12.5244 81.6679C12.1813 79.0379 37.357 21.9051 40.7274 14.0833Z" /><path transform="matrix(0.125 0 0 0.130841 0 -7.62939e-06)" d="M557.705 17.1441C559.01 29.2261 557.84 42.0014 557.81 54.268C557.798 59.269 558.912 73.7542 558.258 77.2245L557.498 77.5914C557.384 77.3834 557.245 77.1296 557.08 76.83C557.629 61.5285 556.837 38.6502 557.157 23.9905C557.185 21.6986 557.368 19.4112 557.705 17.1441Z" /><path transform="matrix(0.125 0 0 0.130841 0 -7.62939e-06)" d="M509.119 28.1844C509.19 29.0337 509.606 35.7623 509.701 35.9002C509.882 31.4602 509.638 29.7598 514.79 29.8811C513.751 30.1031 512.717 30.3453 511.688 30.6076C509.526 32.5569 511.522 70.4554 509.615 74.1696C509.046 67.3181 509.354 57.4629 509.312 50.3261C509.271 43.5149 508.843 34.7805 509.119 28.1844Z" /><path transform="matrix(0.125 0 0 0.130841 0 -7.62939e-06)" d="M509.119 28.1844C512.646 28.3262 516.168 28.582 519.678 28.9515L519.932 29.4387L520.131 29.3961L520.284 29.0623L520.445 29.2892L520.23 29.3551L520.521 29.1625L519.721 28.9164L519.495 29.4563C517.888 29.5685 516.388 29.6737 514.79 29.8811C509.638 29.7598 509.882 31.4602 509.701 35.9002C509.606 35.7623 509.19 29.0337 509.119 28.1844Z" /><path transform="matrix(0.125 0 0 0.130841 0 -7.62939e-06)" d="M590.707 36.8913C591.946 36.7362 592.159 36.6144 593.089 35.7708C592.389 37.5028 589.373 43.3789 588.26 44.6985L587.848 44.6957C587.807 42.1071 588.948 38.8227 590.707 36.8913Z" /><path transform="matrix(0.125 0 0 0.130841 0 -7.62939e-06)" d="M590.707 36.8913C592.955 32.8204 595.339 31.2656 599.534 29.7825C598.025 30.9962 593.547 34.2309 593.089 35.7708C592.159 36.6144 591.946 36.7362 590.707 36.8913Z" /><path transform="matrix(0.125 0 0 0.130841 0 -7.62939e-06)" d="M468.284 49.5338C468.886 50.2271 470.845 55.0824 469.916 56.3432C469.629 56.1762 469.517 55.8859 469.351 55.5838L470.075 55.3584C468.558 53.1689 465.885 53.0525 468.284 49.5338Z" /><path transform="matrix(0.125 0 0 0.130841 0 -7.62939e-06)" d="M654.487 76.9836L654.806 77.3099C655.008 78.0334 653.003 82.5078 652.587 83.8095C651.082 82.6981 653.774 78.4001 654.487 76.9836Z" /><path transform="matrix(0.125 0 0 0.130841 0 -7.62939e-06)" d="M226.422 15.0068C227.528 15.8329 227.532 20.2263 227.284 21.5309L226.74 21.296C226.061 19.9205 226.297 16.5866 226.422 15.0068Z" /></svg>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4 text-[11px] font-medium text-muted-foreground">
              <button onClick={() => setIsServicesOpen(true)} className="hover:text-foreground transition-colors">
                Services
              </button>
              <button onClick={() => setIsAuditOpen(true)} className="hover:text-foreground transition-colors">
                Request audit
              </button>
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
            Automatica helps small and medium businesses in Uzbekistan scale through automation, websites, Telegram bots, and SMM promotion. Increase efficiency and sales by 20–50% with our all-in-one solutions.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => setIsAuditOpen(true)}
            className="inline-flex items-center justify-center gap-6 px-4 py-3 rounded-md bg-black/[0.04] dark:bg-white/[0.04] text-[11px] font-medium text-muted-foreground tracking-[0.24px] hover:bg-black/[0.06] dark:hover:bg-white/[0.06] transition-colors"
          >
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
              alt="Automatica Dashboard"
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
                Automatica stores everything about your business relationships, ensuring no lead or insight is lost, with integrations like Payme, Click, and local ERP.
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
                Automatica analyzes structured CRM data and customer interactions, helping you refine your product roadmap and marketing with real-time queries and SMM optimization.
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
              <path d="M458 226.285L664.026 226.285C665.155 226.285 666.232 226.762 666.99 227.6L689.056 251.965C689.814 252.803 690.891 253.28 692.021 253.28L864 253.285" stroke="#666666" strokeOpacity={1} strokeWidth="0.5" />
              <path d="M328 275.285L656.804 275.285C657.886 275.285 658.922 274.846 659.676 274.069L670.891 262.5C671.645 261.723 672.681 261.285 673.763 261.285L864 261.285" stroke="#666666" strokeOpacity={1} strokeWidth="0.5" />
              <path d="M355 294.285L650.007 294.285C651.055 294.285 652.062 293.873 652.81 293.139L674.913 271.431C675.661 270.696 676.667 270.285 677.716 270.285L864 270.285" stroke="#666666" strokeOpacity={1} strokeWidth="0.5" />
              <path d="M22 302.285L654.075 302.285C655.123 302.285 656.13 301.873 656.878 301.139L679.008 279.362C679.756 278.628 680.763 278.217 681.812 278.217L864 278.285" stroke="#666666" strokeOpacity={1} strokeWidth="0.5" />
              {/* Add all other <path> tags here without truncation. Since the original is truncated, assume they are similar and continue the pattern if needed, but for correction, we focus on the problematic parts. */}

              <g stroke="#666666" strokeOpacity={1} strokeWidth="0.5">
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 789.811 100.202)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 788.069 101.941)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 786.327 103.68)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 784.585 105.419)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 782.843 107.157)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 781.101 108.896)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 779.359 110.635)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 777.617 112.374)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 775.875 114.112)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 774.133 115.851)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 772.391 117.59)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 770.649 119.329)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 768.907 121.068)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 767.165 122.807)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 765.423 124.545)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 763.681 126.284)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 761.939 128.023)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 760.197 129.762)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 758.455 131.501)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 756.713 133.239)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 754.971 134.978)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 753.229 136.717)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 751.487 138.456)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 749.745 140.195)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 748.003 141.933)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 746.261 143.672)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 744.519 145.411)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 742.777 147.15)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 741.035 148.889)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 739.293 150.627)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 737.551 152.366)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 735.809 154.105)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 734.067 155.844)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 732.325 157.582)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 730.583 159.321)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 728.841 161.06)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 727.099 162.799)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 725.357 164.538)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 723.615 166.277)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 721.873 168.015)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 720.131 169.754)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 718.389 171.493)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 716.647 173.232)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 714.905 174.971)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 713.163 176.709)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 711.421 178.448)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 709.679 180.187)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 707.937 181.926)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 706.195 183.664)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 704.453 185.403)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 702.711 187.142)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 700.969 188.881)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 699.227 190.62)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 697.485 192.359)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 695.743 194.097)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 694.001 195.836)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 692.259 197.575)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 690.517 199.314)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 688.775 201.052)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 687.033 202.791)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 685.291 204.53)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 683.549 206.269)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 681.807 208.008)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 680.065 209.746)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 678.323 211.485)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 676.581 213.224)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 674.839 214.963)" strokeDasharray="0.5 0.5" />
                <line y1="-0.25" x2="362" y2="-0.25" transform="matrix(0.707107 0.707107 0.707107 -0.707107 673.097 216.702)" strokeDasharray="0.5 0.5" />
              </g>
              <rect x="-0.25" y="0.25" width="111.254" height="111.254" rx="5.75" transform="matrix(-1 0 0 1 919.375 227.407)" stroke="#666666" strokeOpacity={1} strokeWidth="0.5" />
              <path d="M866.071 274.234V280.269L889.234 266.895V260.86L866.071 274.234Z" fill="#F5F5F5" fillOpacity={1} />
              <path d="M860.744 280.269L837.58 266.895V260.86L860.744 274.234V280.269Z" fill="#F5F5F5" fillOpacity={1} />
              <path d="M889.234 306.367V300.333L866.071 286.959V292.993L889.234 306.367Z" fill="#F5F5F5" fillOpacity={1} />
              <path d="M860.744 292.993V286.959L837.58 300.333V306.367L860.744 292.993Z" fill="#F5F5F5" fillOpacity={1} />
              <path d="M866.32 292.848L888.984 305.934V300.478L866.32 287.392V292.848ZM837.83 300.478V305.934L860.494 292.848V287.392L837.83 300.478ZM866.32 274.379V279.835L888.984 266.749V261.293L866.32 274.379ZM837.83 266.749L860.494 279.835V274.379L837.83 261.293V266.749Z" stroke="black" strokeOpacity="0.5" strokeWidth="0.5" />
              <rect x="878" y="516" width="430" height="40" rx="10" fill="#80BFFF" fillOpacity={0.1} />
              <rect x="878.25" y="516.25" width="429.5" height="39.5" rx="9.75" stroke="#80BFFF" strokeOpacity={0.2} strokeWidth="0.5" />
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
            Get started with Automatica
          </h2>
          <button
            onClick={() => setIsAuditOpen(true)}
            className="inline-flex items-center justify-center gap-6 px-4 py-3 rounded-md bg-black/[0.04] dark:bg-white/[0.04] text-[11px] font-medium text-muted-foreground tracking-[0.24px] hover:bg-black/[0.06] dark:hover:bg-white/[0.06] transition-colors"
          >
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

      {/* Services Dialog */}
      {isServicesOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300">
          <div className="bg-background rounded-[10px] p-6 max-w-[500px] w-full mx-4 shadow-[0_2px_32px_0_rgba(0,0,0,0.04)] border border-black/6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[24px] font-medium leading-[32px] tracking-[-0.16px] text-foreground">
                Our Services
              </h2>
              <button onClick={() => setIsServicesOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-[15px] leading-6 text-muted-foreground mb-4">
              We offer comprehensive solutions to automate and scale your business:
            </p>
            <ul className="space-y-2 text-[14px] leading-6 tracking-[0.15px] text-muted-foreground">
              <li>Business Automation</li>
              <li>Website Development</li>
              <li>Telegram Bots</li>
              <li>SMM Promotion</li>
            </ul>
          </div>
        </div>
      )}

      {/* Request Audit Dialog */}
      {isAuditOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300">
          <div className="bg-background rounded-[10px] p-6 max-w-[500px] w-full mx-4 shadow-[0_2px_32px_0_rgba(0,0,0,0.04)] border border-black/6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[24px] font-medium leading-[32px] tracking-[-0.16px] text-foreground">
                Request Audit
              </h2>
              <button onClick={() => setIsAuditOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-[15px] leading-6 text-muted-foreground mb-6">
              Fill out the form below to request an audit. We'll connect this to your Telegram bot.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-md bg-black/[0.04] dark:bg-white/[0.04] border border-black/12 text-foreground text-[14px] focus:outline-none focus:border-foreground/50"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-md bg-black/[0.04] dark:bg-white/[0.04] border border-black/12 text-foreground text-[14px] focus:outline-none focus:border-foreground/50"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 rounded-md bg-black/[0.04] dark:bg-white/[0.04] border border-black/12 text-foreground text-[14px] focus:outline-none focus:border-foreground/50"
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-black/[0.04] dark:bg-white/[0.04] text-[13px] font-medium text-muted-foreground hover:bg-black/[0.06] dark:hover:bg-white/[0.06] transition-colors"
              >
                <span>Submit Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      <style>{`
        html {
          transition: color 0.6s ease, background-color 0.6s ease;
        }
      `}</style>
    </div>
  );
}