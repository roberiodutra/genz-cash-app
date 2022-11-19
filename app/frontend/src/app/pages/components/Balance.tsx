import { useAppSelector } from '../../store/hooks/useAppSelector';

export default function Balance() {
  const { balance } = useAppSelector((store) => store.user);
  return (
    <section className="balance">
      <h2>{balance}</h2>
    </section>
  );
}
