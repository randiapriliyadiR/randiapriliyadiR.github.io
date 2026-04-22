import Skeleton from '@/components/Skeleton';

export default function Loading() {
  return (
    <div style={{ padding: 'var(--main-padding)', display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
      <div style={{ marginBottom: '4rem' }}>
        <Skeleton width="150px" height="2rem" />
        <Skeleton width="100%" height="1px" style={{ marginTop: '1rem' }} />
      </div>

      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)', paddingLeft: '2rem' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '1px', backgroundColor: 'currentColor', opacity: 0.1 }} />
        {[1, 2, 3, 4].map((i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Skeleton width="80px" height="1rem" />
            <Skeleton width="300px" height="2.5rem" style={{ marginTop: '0.2rem' }} />
            <Skeleton width="180px" height="1.2rem" />
            <Skeleton width="100%" height="80px" style={{ marginTop: '1rem', maxWidth: '600px' }} />
          </div>
        ))}
      </div>
    </div>
  );
}
