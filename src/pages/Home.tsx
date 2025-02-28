import Card from '@/components/common/Card';
import Container from '@/components/common/Container';
import Flex from '@/components/common/Flex';
import Input from '@/components/common/Input';
import useToast from '@/hooks/utils/useToast';

export const Home = () => {
  const toast = useToast();
  return (
    <>
      <Flex css={{ columns: true, gap: '20px' }}>
        <Container lg>
          <h2>Container with Borders</h2>
          <p>This container has a border.</p>
        </Container>

        <Container borderless>
          <h2>Container without Borders</h2>
          <p>This container has no border.</p>
        </Container>

        <h1>Styled Components</h1>

        <Card>
          <h2>Card Title</h2>
          <p>This is a simple card component.</p>
        </Card>

        <Input placeholder="Enter text..." />

        <div className="button-flex">
          <button className="default__button" onClick={() => toast.notify()}>
            Show Unicorn Toast
          </button>
          <button className="default__button" onClick={() => toast.success('🎉 Success!')}>
            Show Success
          </button>
          <button className="default__button" onClick={() => toast.info('ℹ️ Info Message')}>
            Show Info
          </button>
          <button className="default__button" onClick={() => toast.warning('⚠️ Warning!')}>
            Show Warning
          </button>
          <button className="default__button" onClick={() => toast.error('❌ Error!')}>
            Show Error
          </button>
          <button className="default__button" onClick={() => toast.default('🔔 Default Toast')}>
            Show Default
          </button>
        </div>
      </Flex>
    </>
  );
};
