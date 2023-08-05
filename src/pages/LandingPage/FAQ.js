import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
      question: 'What is Mira?',
      answer: 'Mira is an AI-powered fashion design assistant that allows you to create, edit, and share fashion designs using natural language commands.',
    },
    {
      question: 'Who can use Mira?',
      answer: 'Mira is designed for fashion designers, students, brands, and anyone interested in the fashion design process.',
    },
    {
      question: 'How does the collaboration feature work?',
      answer: 'With Mira, you can share your collections and collaborate in real-time, enabling easy collaboration and feedback exchange with team members.',
    },
    {
      question: 'Is Mira available on mobile devices?',
      answer: 'Yes, Mira is accessible on various devices, including smartphones and tablets, allowing you to design on the go.',
    },
    {
      question: 'How secure is my data with Mira?',
      answer: 'Mira prioritizes data security, employing encryption and access controls to ensure your designs and information are protected.',
    },
    {
      question: 'Can I try Mira for free?',
      answer: 'Yes, Mira offers a free trial version that allows you to explore its features. Various subscription plans are available for additional functionalities.',
    },
    {
      question: 'What kind of support is available?',
      answer: 'Mira provides extensive support through documentation, tutorials, and a dedicated support team available to assist with any questions or concerns.',
    },
    {
      question: 'How does Mira\'s AI understand my design instructions?',
      answer: 'Mira\'s AI leverages advanced natural language processing techniques to interpret your instructions, allowing you to create and edit designs intuitively.',
    },
    {
      question: 'Can I export my designs from Mira?',
      answer: 'Yes, Mira offers various export options, enabling you to save and share your designs in different formats suitable for your needs.',
    },
    {
      question: 'Is Mira suitable for beginners?',
      answer: 'Absolutely! Mira\'s intuitive interface and AI assistance make it accessible for designers of all levels, from beginners to professionals.',
    },
  ];
  
  
  export default function FAQ() {
    return (
      <div id="FAQ" className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">Still have questions?</h2>
            </div>
            <div className="mt-10 lg:col-span-7 lg:mt-0">
            <dl className="mt-10 space-y-6 divide-y divide-white/10 lg:mt-0">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-300">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
            </div>
          </div>
        </div>
      </div>
    )
  }
  