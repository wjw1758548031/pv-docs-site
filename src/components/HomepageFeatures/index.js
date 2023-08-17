import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Before you buy',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    href: '/docs/devices',
    description: (
      <>
        Find out more about the Petority Smart Tracker and learn how it can help
        keep your pet health and safe.
      </>
    ),
  },
  {
    title: 'Your Petority Device',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    href: '/docs/devices',
    description: <>The first steps to begin monitoring your pet.</>,
  },
  {
    title: 'App features',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    href: '/docs/devices',
    description: (
      <>
        Learn about all of the features and functions of the Petority Smart
        Tracker app for awesome monitoring experience!
      </>
    ),
  },
]

function Feature({Svg, href, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
