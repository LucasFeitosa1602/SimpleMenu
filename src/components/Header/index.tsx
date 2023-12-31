import { TouchableOpacity } from 'react-native';
import { Text } from '../Text';
import { Container, Content, OrderHeader, Table } from './styles';

interface HeaderProps{
  selectedTable: string;
  onCancelOrder: () => void;
}

export function Header({ selectedTable, onCancelOrder }: HeaderProps){
  return(
    <Container>
      {!selectedTable && (
        <>
          <Text size={14} opacity={0.9}>Bem-vindo(a) ao</Text>

          <Text size={24} weight="700">SIMPLE
            <Text size={24}>MENU</Text>
          </Text>
        </>
      )}


      {selectedTable && (
        <Content>
          <OrderHeader>
            <Text size={24} weigth="600">Pedido</Text>

            <TouchableOpacity onPress={onCancelOrder}>
              <Text color="#5F9F9F" weigth="600" size={14}>Cancelar pedido</Text>
            </TouchableOpacity>
          </OrderHeader>

          <Table>
            <Text color="#666">Mesa {selectedTable}</Text>
          </Table>
        </Content>
      )}


    </Container>
  );
}
