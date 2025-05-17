import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Clases en Video',
    Svg: require('@site/static/img/undraw_video_files.svg').default,
    description: (
      <>
        Accede a todas las clases del curso en formato video, organizadas y disponibles desde nuestro canal de YouTube, directamente en esta página.
      </>
    ),
  },
  {
    title: 'Aprende a Tu Ritmo',
    Svg: require('@site/static/img/undraw_online_learning.svg').default,
    description: (
      <>
        Mira las clases cuando quieras y repítelas las veces que necesites. Diseñado para adaptarse a tu horario y estilo de aprendizaje.
      </>
    ),
  },
  {
    title: 'Contenido Enfocado',
    Svg: require('@site/static/img/undraw_task_list.svg').default,
    description: (
      <>
        Cada clase cubre un tema específico de Word, permitiéndote avanzar paso a paso sin distracciones ni información innecesaria.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
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
