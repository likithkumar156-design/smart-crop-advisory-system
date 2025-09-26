import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Link from 'next/link'
import { 
  Leaf, 
  Cloud, 
  Bug, 
  TrendingUp, 
  Volume2, 
  Users,
  ChevronRight
} from 'lucide-react'

export default function Home() {
  const { t } = useTranslation('common')

  const features = [
    {
      icon: Cloud,
      title: t('features.weather.title'),
      description: t('features.weather.description'),
    },
    {
      icon: Leaf,
      title: t('features.soil.title'),
      description: t('features.soil.description'),
    },
    {
      icon: Bug,
      title: t('features.pest.title'),
      description: t('features.pest.description'),
    },
    {
      icon: TrendingUp,
      title: t('features.market.title'),
      description: t('features.market.description'),
    },
    {
      icon: Volume2,
      title: t('features.voice.title'),
      description: t('features.voice.description'),
    },
    {
      icon: Users,
      title: t('features.community.title'),
      description: t('features.community.description'),
    },
  ]

  return (
    <>
      <Head>
        <title>{t('site.title')}</title>
        <meta name="description" content={t('site.description')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link href="/" className="text-2xl font-bold text-green-600">
                  🌱 {t('site.name')}
                </Link>
              </div>
              <nav className="hidden md:flex space-x-10">
                <Link href="/advisory" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  {t('nav.advisory')}
                </Link>
                <Link href="/weather" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  {t('nav.weather')}
                </Link>
                <Link href="/market" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  {t('nav.market')}
                </Link>
                <Link href="/community" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  {t('nav.community')}
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-gradient-to-br from-green-50 to-blue-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">{t('hero.title.part1')}</span>{' '}
                    <span className="block text-green-600 xl:inline">{t('hero.title.part2')}</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    {t('hero.subtitle')}
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <Link
                        href="/advisory"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                      >
                        {t('hero.cta.primary')}
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </Link>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <Link
                        href="/about"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10"
                      >
                        {t('hero.cta.secondary')}
                      </Link>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
                {t('features.section.subtitle')}
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {t('features.section.title')}
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                {t('features.section.description')}
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {features.map((feature) => (
                  <div key={feature.title} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        {feature.title}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-green-700">
          <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">{t('cta.title')}</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-green-200">
              {t('cta.description')}
            </p>
            <Link
              href="/register"
              className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50 sm:w-auto"
            >
              {t('cta.button')}
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="space-y-8 xl:col-span-1">
                <div className="text-2xl font-bold text-white">
                  🌱 {t('site.name')}
                </div>
                <p className="text-gray-400 text-base">
                  {t('footer.description')}
                </p>
              </div>
            </div>
            <div className="mt-12 border-t border-gray-700 pt-8">
              <p className="text-base text-gray-400 xl:text-center">
                {t('footer.copyright')}
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  }
}