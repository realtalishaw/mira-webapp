import { UserGroupIcon, ChatBubbleLeftRightIcon, KeyIcon} from '@heroicons/react/20/solid'

const features = [
    {
      name: 'Real-Time Collaboration.',
      description: 'Work together on designs with team members and clients. Changes are synced instantly, enabling seamless collaboration.',
      icon: UserGroupIcon,
    },
    {
      name: 'Feedback Exchange.',
      description: 'Easily share your collections and receive instant feedback. Annotations and comments streamline communication.',
      icon: ChatBubbleLeftRightIcon,
    },
    {
      name: 'Access Control.',
      description: 'Manage who can view or edit your collections. Customizable permissions ensure the right people have access.',
      icon: KeyIcon,
    },
  ];
  

export default function Left() {
  return (
    <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Collaborate Seamlessly</p>
              <p className="mt-6 text-lg leading-8 text-white">
                Share your collections and collaborate with others in real time. Mira enables easy collaboration and feedback exchange.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-white lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <img
              src="/images/profile.png"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
