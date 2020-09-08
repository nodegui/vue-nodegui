import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Powered by Vue</>,
    imageUrl: 'img/undraw_monitor.png',
    description: (
      <>
        With Vue NodeGui, you can build truly native desktop applications using vue syntax.
        We also have a pure <a href="https://docs.nodegui.org/" target="__blank">Javascript</a> and <a href="https://react.nodegui.org/" target="__blank">React</a> based versions
      </>
    ),
  },
  {
    title: <>Open Source</>,
    imageUrl: 'img/undraw_open_source.svg',
    description: (
      <>
        Vue NodeGui is an open source project built on other open source technologies.
        We love the community and will always <a href="https://github.com/shubhamzanwar/vue-nodegui" target="__blank">welcome contributions</a>!
      </>
    ),
  },
  {
    title: <>Cross Platform</>,
    imageUrl: 'img/undraw_windows.svg',
    description: (
      <>
        Apps created using Vue NodeGui can be built and run on Mac, Linux and windows machines!
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      <div className="text--center">
        <img className={styles.featureImage} src={imgUrl} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Build performant, native and cross-platform desktop applications with Vue 🚀">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img src="img/logox200.png" />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/guides/1-getting-started')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main className={styles.content}>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
        <section className={styles.description}>
          <div className={classnames("row", styles.descriptionRow)}>
            <div className={classnames("col col--6", styles.imgColumn)}>
              <img src="img/demo-calculator.png" className={styles.demoImg} />
            </div>
            <div className="col col--6">
              <h3>Create native apps for Windows, MacOs and Linux using Vue and CSS</h3>
              <p>lets you create truly native apps and doesn't compromise on your users' experience. It provides a core set of platform agnostic native widgets that map directly to the platform’s native UI building blocks.</p>
              <p>Vue NodeGui widgets are built on top of <a href="https://www.qt.io/" target="_blank">Qt</a> which is a mature desktop apps framework. Vue NodeGui components are extremely customizable just like in the web but does <strong>NOT</strong> use a Web browser under the hood.</p>
            </div>
          </div>
        </section>
        <section className={styles.description}>
          <div className={classnames("row", styles.descriptionRow)}>
            <div className="col col--6">
              <h3>Written in Vue — rendered with native code by Qt</h3>
              <p>Apps can be built completely in JavaScript. This enables native app development for whole new teams of developers, and can let existing native teams work much faster.</p>
              <p>With NodeGui you get flexibility of web and performance of Native desktop apps.</p>
            </div>
            <div className={classnames("col col--6", styles.imgColumn)}>
              <img src="img/sample-code.png" className={styles.demoImg} />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
