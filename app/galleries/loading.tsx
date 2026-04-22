import Skeleton from '@/components/Skeleton';

export default function Loading() {
  return (
    <div style={{ padding: 'var(--main-padding)', display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
      <div style={{ marginBottom: '2rem' }}>
        <Skeleton width="180px" height="2rem" />
        <Skeleton width="100%" height="1px" style={{ marginTop: '1rem' }} />
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: '2rem' 
      }}>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Skeleton key={i} width="100%" height="300px" borderRadius="8px" />
        ))}
      </div>
    </div>
  );
}
