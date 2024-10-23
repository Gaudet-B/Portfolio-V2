export default function ExperienceSection({
  isDesktop,
  smallHeaders,
}: {
  isDesktop: boolean
  smallHeaders: boolean
}) {
  return (
    <>
      <h3 className="mt-5 mb-3 text-white-50">PROFESSIONAL EXPERIENCE</h3>

      <div
        className={
          isDesktop
            ? 'mx-5 my-4 d-flex flex-row justify-content-between'
            : 'my-4 d-flex flex-row justify-content-between'
        }
      >
        <div
          className="d-flex flex-column"
          style={isDesktop ? { width: '19%' } : { width: '24%' }}
        >
          {smallHeaders ? <h5>Border, LLC</h5> : <h6>Border, LLC</h6>}
          <h6>San Diego, CA</h6>
          <h6>2022 - 2024</h6>
        </div>

        <div
          className=""
          style={isDesktop ? { width: '80%' } : { width: '75%' }}
        >
          <h5
            className={
              isDesktop
                ? 'fw-normal fst-italic ms-4'
                : 'fw-normal fst-italic ms-5'
            }
          >
            Frontend Developer
          </h5>
          <ul>
            <li className="mb-3">
              Contributions included an application used to track security
              compliance of internal teams, and modernizing a legacy React
              application with Typescript and Vite.
            </li>
            <li className="mb-3">
              Maintained daily and weekly communications as a member of agile
              teams across multiple enterprise clients, including Viasat (San
              Diego) and MetTel (New York).
            </li>
            <li>
              Consistently delivered features in frontend (React.js) and
              fullstack (React.js, Python) roles.
            </li>
          </ul>
        </div>
      </div>

      <div
        className={
          isDesktop
            ? 'mx-5 my-4 d-flex flex-row justify-content-between'
            : 'my-4 d-flex flex-row justify-content-between'
        }
      >
        <div
          className="d-flex flex-column"
          style={isDesktop ? { width: '19%' } : { width: '24%' }}
        >
          {smallHeaders ? <h5>Self-Employed</h5> : <h6>Self-Employed</h6>}
          <h6>Remote</h6>
          <h6>2021 - present</h6>
        </div>

        <div
          className=""
          style={isDesktop ? { width: '80%' } : { width: '75%' }}
        >
          <h5
            className={
              isDesktop
                ? 'fw-normal fst-italic ms-4'
                : 'fw-normal fst-italic ms-5'
            }
          >
            Freelance Software Developer
          </h5>
          <ul>
            <li className="mb-3">
              Obtain new clients via Upwork or personal/professional networking.
            </li>
            <li className="mb-3">
              Specialize in automation projects, API interfaces, and web
              development.
            </li>
            <li>
              Target new clients with frontend and web development work,
              specifically React.js and Next.js.
            </li>
          </ul>
        </div>
      </div>

      {/* <div
        className={
          windowWidth > 900
            ? 'mx-5 mt-4 mb-5 d-flex flex-row justify-content-between'
            : 'my-4 d-flex flex-row justify-content-between'
        }
      >
        <div
          className="d-flex flex-column"
          style={windowWidth > 900 ? { width: '14%' } : { width: '24%' }}
        >
          {windowWidth > 500 ? (
            <h5>BottleBoon Colsulting, LLC</h5>
          ) : (
            <h6>BottleBoon Colsulting, LLC</h6>
          )}
          <h6>San Diego, CA</h6>
          <h6>2020 - 2021</h6>
        </div>

        <div
          className=""
          style={windowWidth > 900 ? { width: '85%' } : { width: '75%' }}
        >
          <h5
            className={
              windowWidth > 900
                ? 'fw-normal fst-italic ms-4'
                : 'fw-normal fst-italic ms-5'
            }
          >
            Owner
          </h5>
          <ul>
            <li>
              Partnered with two former co-workers to form an LLC that
              focused hospitality consulting during the early days of the
              coronavirus pandemic.
            </li>
            <li>
              Obtained a multi-year contract from a Fortune 500 Real
              Estate company to operate food and beverage venues on its
              campuses.
            </li>
          </ul>
        </div>
      </div> */}
    </>
  )
}
