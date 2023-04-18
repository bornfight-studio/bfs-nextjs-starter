import { useState } from 'react';
import { GetStaticProps } from 'next';
import Button from '@atoms/Button';
import Modal from '@molecules/Modal';

const IndexPage = () => {
    const [modal, setModal] = useState<boolean>(false);

    return (
        <div style={{ padding: 20 }}>
            <Button label="btn" onClick={() => setModal(!modal)} />
            <Modal name="test-modal" opened={modal} close={() => setModal(false)}>
                <p>this is modal content</p>
            </Modal>
        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => ({
    props: {},
    revalidate: 10,
});

export default IndexPage;
