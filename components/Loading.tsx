import ContentLoader from 'react-content-loader'

export default function Loading() {
  return (
    <div style={{ margin: '1rem' }}>
      {/*info*/}
      <ContentLoader
        speed={2}
        width={1024}
        height={150}
        viewBox="0 0 1024 150"
      >
        {/*full name*/}
        <rect x="0" y="10" rx="3" ry="3" width="310" height="30" />
        {/*title*/}
        <rect x="0" y="60" rx="3" ry="3" width="210" height="20" />
        {/*social*/}
        <rect x="0" y="100" rx="3" ry="3" width="150" height="12" />
        <rect x="200" y="100" rx="3" ry="3" width="150" height="12" />
        <rect x="400" y="100" rx="3" ry="3" width="150" height="12" />
        <rect x="600" y="100" rx="3" ry="3" width="150" height="12" />
        <rect x="800" y="100" rx="3" ry="3" width="150" height="12" />
      </ContentLoader>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '700px 250px',
          gap: '1rem'
        }}
      >
        {/*left side*/}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/*summary*/}
          <ContentLoader
            speed={2}
            width={1024}
            height={200}
            viewBox="0 0 1024 200"
          >
            <rect x="0" y="10" rx="3" ry="3" width="150" height="15" />
            <circle cx="20" cy="50" r="8" />
            <rect x="40" y="45" rx="5" ry="5" width="500" height="8" />
            <circle cx="20" cy="80" r="8" />
            <rect x="40" y="75" rx="5" ry="5" width="500" height="8" />
            <circle cx="20" cy="110" r="8" />
            <rect x="40" y="105" rx="5" ry="5" width="500" height="8" />
          </ContentLoader>

          {/*experiences*/}
          <ContentLoader
            speed={2}
            width={1024}
            height={200}
            viewBox="0 0 1024 200"
          >
            <rect x="0" y="10" rx="3" ry="3" width="150" height="15" />
            <circle cx="20" cy="50" r="8" />
            <rect x="40" y="45" rx="5" ry="5" width="500" height="8" />
            <circle cx="20" cy="80" r="8" />
            <rect x="40" y="75" rx="5" ry="5" width="500" height="8" />
            <circle cx="20" cy="110" r="8" />
            <rect x="40" y="105" rx="5" ry="5" width="500" height="8" />
          </ContentLoader>
        </div>

        {/*right side*/}
        <>
          <ContentLoader
            speed={2}
            width={1024}
            height={200}
            viewBox="0 0 1024 200"
          >
            <rect x="0" y="10" rx="3" ry="3" width="200" height="20" />
            <rect x="0" y="50" rx="3" ry="3" width="150" height="15" />
            <rect x="0" y="100" rx="3" ry="3" width="400" height="8" />
          </ContentLoader>
        </>
      </div>
    </div>
  );
}
