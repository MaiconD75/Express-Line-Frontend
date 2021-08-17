import styled from 'styled-components';

enum Status {
  Delivered = 'Entregue',
  Forwarded = 'Encaminhado',
  Pending = 'Pendente',
  Canceled = 'Cancelado',
}

interface ContainerProps {
  status: Status;
}

export const Container = styled.div<ContainerProps>`
  width: 55%;
  height: 32px;
  display: flex;
  align-items: center;
  border-radius: 16px;

  background-color: ${props => {
    if (props.status === 'Entregue') {
      return '#93ff81';
    }

    if (props.status === 'Cancelado') {
      return '#FF6D6D';
    }

    if (props.status === 'Encaminhado') {
      return '#fef977';
    }

    return '#C4C4C4';
  }};

  canvas {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-left: 8px;
    margin-left: 8px;

    background-color: ${props => {
      if (props.status === 'Entregue') {
        return '#0A8B3E';
      }

      if (props.status === 'Cancelado') {
        return '#BD1111';
      }

      if (props.status === 'Encaminhado') {
        return '#FFC600';
      }

      return '#6F6B6B';
    }};
  }

  span {
    font-size: 14px;
    font-weight: 600;
    color: ${props => {
      if (props.status === 'Entregue') {
        return '#0A8B3E';
      }

      if (props.status === 'Cancelado') {
        return '#BD1111';
      }

      if (props.status === 'Encaminhado') {
        return '#FFC600';
      }

      return '#6F6B6B';
    }};
    overflow: hidden;
    text-overflow: ellipsis;

    margin: 0 auto;
  }
`;
