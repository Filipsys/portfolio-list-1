import Image from "next/image";

function App() {
  return (
    <div className="flex w-screen flex-col bg-gray-200 text-zinc-800">
      <div className="flex flex-row">
        <div className="w-1/2 p-12 pr-8">
          <div>
            <h2 className="text-2xl font-bold">Krosser</h2>
          </div>

          <div className="flex h-full items-center">
            <h1 className="pt-12 text-7xl">
              The World's Leading Anti-Fraud Platform for Financial Institutions
            </h1>
          </div>
        </div>

        <div className="flex w-1/2 flex-col p-12">
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

          <div className="flex h-full items-end">
            <h3 className="text-2xl">
              Cutting-edge fraud detection and prevention tools designed
              specifically for financial institutions. Real-time protection for
              countless trusted partners and businesses, Krosser is the best
              choice for your organization.
            </h3>
          </div>
        </div>
      </div>

      <div className="mt-12 flex items-center p-4">
        <div className="flex w-[150vw] flex-row gap-4">
          <div className="relative">
            <Image
              src="/images/front-img-1.jpg"
              alt="First image"
              width={700}
              height={700}
              className="aspect-[9/16] object-cover brightness-50"
            />
            <p className="absolute right-0 top-0 w-3/4 p-4 text-right text-white">
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

            <p className="absolute right-0 top-0 w-3/4 p-4 text-right text-white">
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

            <p className="absolute right-0 top-0 w-3/4 p-4 text-right text-white">
              Less time stressing spent on meetings, more time on your business.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col p-12">
        <div>
          <h2 className="w-2/3 pb-12 text-7xl">
            Single Subscription, One Comprehensive Platform, Zero Hassle
          </h2>
        </div>

        <div className="flex flex-row">
          <div className="grid w-1/3 grid-cols-2 grid-rows-2 p-4">
            <div />
            <div />
            <div className="text-l flex items-end">
              See our platform in action and discover how it elevates your fraud
              prevention effortlessly.
            </div>
            <div />
          </div>

          <div className="flex w-2/3 flex-col gap-8 p-4 *:text-4xl">
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

      <div className="flex flex-col bg-gray-300 p-12">
        <div className="grid w-full grid-cols-5 grid-rows-2 *:p-2">
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

      <div className="flex w-screen flex-col gap-12 bg-gray-200 p-12">
        <div className="flex w-full flex-row gap-12">
          <div className="h-96 w-full">
            <h3 className="py-6 text-6xl">
              Round-the-Clock Support for Uninterrupted Security
            </h3>
            <p className="text-xl">
              Our dedicated support team ensures your institution's protection
              is always in capable hands. With 24/7 monitoring and real-time
              assistance, we respond to your concerns any time, minimizing risk
              and maximizing operational security.
            </p>
          </div>
          <div className="h-96 w-full">
            <Image
              src="/images/other-img-1.jpg"
              alt="Server image"
              width={1000}
              height={1000}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>

        <div className="flex w-full flex-row gap-12">
          <div className="h-96 w-full">
            <Image
              src="/images/other-img-2.jpg"
              alt="Processor image"
              width={1000}
              height={1000}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="h-96 w-full">
            <h3 className="py-6 text-6xl">
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

      <div className="flex w-screen flex-row justify-between bg-gradient-to-t from-gray-300 to-gray-200 p-12 text-gray-400">
        <h3 className="text-xl">Krosser</h3>

        <div className="flex flex-row gap-4">
          <p className="underline-offset-4 hover:underline">
            <a href="#">Terms and conditions</a>
          </p>
          <p className="underline-offset-4 hover:underline">
            <a href="#">Privacy policy</a>
          </p>
          <p className="underline-offset-4 hover:underline">
            <a href="#">Cookie policy</a>
          </p>
        </div>

        <p>All rights reserved ©2024</p>
      </div>
    </div>
  );
}

export default App;
