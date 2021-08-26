import React, { useEffect, useState } from 'react';
import { DeliveryData } from '../../pages/Deliveries';

import { Container } from './styles';

interface StatusTagprops {
  delivery: DeliveryData;
}

enum Status {
  Delivered = 'Entregue',
  Forwarded = 'Encaminhado',
  Pending = 'Pendente',
  Canceled = 'Cancelado',
}

const StatusTag: React.FC<StatusTagprops> = ({ delivery }) => {
  const [status, setStatus] = useState<Status>(Status.Pending);

  useEffect(() => {
    setStatus(() => {
      if (delivery.end_date) {
        return Status.Delivered;
      }

      if (delivery.canceled_at) {
        return Status.Canceled;
      }

      if (delivery.start_date) {
        return Status.Forwarded;
      }

      return Status.Pending;
    });
  }, [delivery]);

  return (
    <Container status={status}>
      <canvas />
      <span>{status}</span>
    </Container>
  );
};

export default StatusTag;
