import Image from "next/image";

function App() {
  return (
    <div className="w-screen bg-gray-200 text-zinc-800 flex flex-col">
      <div className="flex flex-row">
        <div className="w-1/2 p-12 pr-8">
          <div>
            <h2 className="font-bold text-2xl">Krosser</h2>
          </div>

          <div className="h-full flex items-center">
            <h1 className="text-7xl pt-12">
              The World's Leading Anti-Fraud Platform for Financial Institutions
            </h1>
          </div>
        </div>

        <div className="w-1/2 p-12 flex flex-col">
          <nav className="flex flex-row gap-16 underline-offset-4">
            <ul>
              <li>
                <a className="hover:underline" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Product & Services
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Benefits
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a className="hover:underline" href="#">
                  International Partners
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Our Blog
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a className="hover:underline" href="#">
                  Case Studies
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Resources & Insights
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Innovation Hub
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-end h-full">
            <h3 className="text-2xl">
              Cutting-edge fraud detection and prevention tools designed
              specifically for financial institutions. Real-time protection for
              countless trusted partners and businesses, Krosser is the best
              choice for your organization.
            </h3>
          </div>
        </div>
      </div>

      <div className=" flex mt-12 items-center p-4">
        <div className="w-[150vw] flex flex-row gap-4">
          <div className="relative">
            <Image
              src="/images/front-img-1.jpg"
              alt="First image"
              width={700}
              height={700}
              className="aspect-[9/16] object-cover brightness-50"
            />
            <p className="absolute top-0 right-0 p-4 text-right w-3/4 text-white">
              No need to worry about fraud, take your business performance to
              the next stage.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/images/front-img-2.jpg"
              alt="Second image"
              width={700}
              height={700}
              className="aspect-[9/16] object-cover brightness-50"
            />

            <p className="absolute top-0 right-0 p-4 text-right w-3/4 text-white">
              Finance in ease, no more hassle. Krosser is the best choice for
              your organization.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/images/front-img-3.jpg"
              alt="Third image"
              width={700}
              height={700}
              priority
              className="aspect-[9/16] object-cover brightness-50"
            />

            <p className="absolute top-0 right-0 p-4 text-right w-3/4 text-white">
              Less time stressing spent on meetings, more time on your business.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col p-12">
        <div>
          <h2 className="text-7xl pb-12 w-2/3">
            Single Subscription, One Comprehensive Platform, Zero Hassle
          </h2>
        </div>

        <div className="flex flex-row">
          <div className="grid grid-cols-2 grid-rows-2 w-1/3 p-4 ">
            <div />
            <div />
            <div className="flex items-end text-l ">
              See our platform in action and discover how it elevates your fraud
              prevention effortlessly.
            </div>
            <div />
          </div>

          <div className="flex flex-col gap-8 w-2/3 *:text-4xl p-4">
            <p>
              Maintaining multiple payment systems is complex and error-prone.
              Our platform unifies everything, making transactions seamless and
              hassle-free.
            </p>
            <p>
              Securing multiple systems is difficult and risky. Our solution
              offers all-in-one, adaptive protection against emerging threats.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col p-12 bg-gray-300">
        <div className="grid grid-cols-5 grid-rows-2 w-full *:p-2">
          <div>
            <h2>Trusted by thousands, including our esteemed gold partners.</h2>
          </div>
          <div />
          <div>
            <Image
              className="opacity-30"
              src="/logos/3m.svg"
              alt="3M Logo"
              width={64}
              height={64}
            />
          </div>
          <div>
            <Image
              className="opacity-30"
              src="/logos/airbnb.svg"
              alt="Airbnb Logo"
              width={64}
              height={64}
            />
          </div>
          <div>
            <Image
              className="opacity-30"
              src="/logos/amazon.svg"
              alt="Amazon Logo"
              width={64}
              height={64}
            />
          </div>

          <div />
          <div />
          <div>
            <Image
              className="opacity-30"
              src="/logos/lidl.svg"
              alt="Lidl Logo"
              width={64}
              height={64}
            />
          </div>
          <div>
            <Image
              className="opacity-30"
              src="/logos/alfaromeo.svg"
              alt="Microsoft Logo"
              width={64}
              height={64}
            />
          </div>
          <div>
            <Image
              className="opacity-30"
              src="/logos/theboringcompany.svg"
              alt="TheBoringCompany Logo"
              width={64}
              height={64}
            />
          </div>
        </div>
      </div>

      <div className="w-screen bg-gray-200 flex flex-col gap-12 p-12">
        <div className="w-full flex flex-row gap-12">
          <div className="w-full h-96">
            <h3 className="text-6xl py-6">
              Round-the-Clock Support for Uninterrupted Security
            </h3>
            <p className="text-xl">
              Our dedicated support team ensures your institution's protection
              is always in capable hands. With 24/7 monitoring and real-time
              assistance, we respond to your concerns any time, minimizing risk
              and maximizing operational security.
            </p>
          </div>
          <div className="w-full h-96">
            <Image
              src="/images/other-img-1.jpg"
              alt="Server image"
              width={1000}
              height={1000}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>

        <div className="w-full flex flex-row gap-12">
          <div className="w-full h-96">
            <Image
              src="/images/other-img-2.jpg"
              alt="Processor image"
              width={1000}
              height={1000}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="w-full h-96">
            <h3 className="text-6xl py-6">
              Advanced Fraud Detection with AI-Driven Precision
            </h3>
            <p className="text-xl">
              Harness the power of artificial intelligence to safeguard your
              financial ecosystem. Our cutting-edge platform identifies
              suspicious activity in real time, mitigating threats with
              unparalleled accuracy and efficiency, all while adapting to
              evolving fraud techniques.
            </p>
          </div>
        </div>
      </div>

      <div className="w-screen bg-gradient-to-t from-gray-300 to-gray-200 flex flex-row justify-between p-12 text-gray-400">
        <h3 className="text-xl">Krosser</h3>

        <div className="flex flex-row gap-4">
          <p className="hover:underline underline-offset-4">
            <a href="#">Terms and conditions</a>
          </p>
          <p className="hover:underline underline-offset-4">
            <a href="#">Privacy policy</a>
          </p>
          <p className="hover:underline underline-offset-4">
            <a href="#">Cookie policy</a>
          </p>
        </div>

        <p>All rights reserved ©2024</p>
      </div>
    </div>
  );
}

export default App;
