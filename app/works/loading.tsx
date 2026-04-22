import Skeleton from '@/components/Skeleton';

export default function Loading() {
  return (
    <div style={{ padding: 'var(--main-padding)', display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
      <div style={{ marginBottom: '4rem' }}>
        <Skeleton width="150px" height="2rem" />
        <Skeleton width="100%" height="1px" style={{ marginTop: '1rem' }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
        {[1, 2, 3].map((i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'row', gap: '4rem', minHeight: '60vh' }}>
            <Skeleton width="60%" height="60vh" />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <Skeleton width="100px" height="1.5rem" />
              <Skeleton width="300px" height="2.5rem" />
              <Skeleton width="150px" height="1.5rem" />
              <Skeleton width="100%" height="100px" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
