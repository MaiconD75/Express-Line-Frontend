import React, { useEffect, useState } from 'react';
import { DeliveriesData } from '../../hooks/DeliveriesContextx';

import { Container } from './styles';

interface StatusTagprops {
  deliverie: DeliveriesData;
}

enum Status {
  Delivered = 'Entregue',
  Forwarded = 'Encaminhado',
  Pending = 'Pendente',
  Canceled = 'Cancelado',
}

const StatusTag: React.FC<StatusTagprops> = ({ deliverie }) => {
  const [status, setStatus] = useState<Status>(Status.Pending);

  useEffect(() => {
    setStatus(() => {
      if (deliverie.end_date) {
        return Status.Delivered;
      }

      if (deliverie.canceled_at) {
        return Status.Canceled;
      }

      if (deliverie.start_date) {
        return Status.Forwarded;
      }

      return Status.Pending;
    });
  }, [deliverie]);

  return (
    <Container status={status}>
      <canvas />
      <span>{status}</span>
    </Container>
  );
};

export default StatusTag;
