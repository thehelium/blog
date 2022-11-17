export default function Head() {
  const t = 'About - Harris Tsai';

  const header = () => {
    return t ? <title>{t}</title> : <title>Harris Tsai</title>;
  };

  return (
    <>
      <head>
        {header()}
        <meta name="twitter:title" content={t} />
        <meta property="og:title" content={t} />
      </head>
    </>
  );
}
