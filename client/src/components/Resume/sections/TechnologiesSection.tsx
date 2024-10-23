export default function TechnologiesSection({
  isDesktop,
}: {
  isDesktop: boolean
}) {
  return (
    <>
      <h3 className="mt-5 mb-2 text-white-50">TECHNOLOGIES & FRAMEWORKS</h3>

      <div className={`my-4 ${isDesktop ? 'mx-5' : 'mx-2'}`}>
        {/* <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '2rem',
                  flexWrap: 'wrap',
                  width: '100%',
                }}
                className={`mb-4 fs-5 ${windowWidth > 500 ? 'pe-4' : ''}`}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '8px',
                    flexWrap: 'wrap',
                  }}
                >
                  <span>{'React.js, '}</span>
                  <span>{'Next.js, '}</span>
                  <span>{'Typescript'}</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '8px',
                    flexWrap: 'wrap',
                  }}
                >
                  <span>{'AWS, '}</span>
                  <span>{'Serverless, '}</span>
                  <span>{'Vercel, '}</span>
                  <span>{'Git'}</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '8px',
                    flexWrap: 'wrap',
                  }}
                >
                  <span>{'Next.js, '}</span>
                  <span>{'Python, '}</span>
                  <span>{'SQL'}</span>
                </div>
              </div> */}
        <p className="mb-5">
          React.js, Next.js, JavaScript, Vite.js, AWS, Python, Flask, Java,
          Node.js, MySQL, PostgreSQL, MongoDB, TailwindCSS, GitHub, Visual
          Studio Code, Selenium, terraform, Docker, react-query
        </p>
      </div>
    </>
  )
}
