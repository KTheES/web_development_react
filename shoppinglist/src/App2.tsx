import { useState } from 'react';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// 쇼핑 항목을 표시하는 목록 관련 Component들을 import
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import './App.css'

import AddItem from './components/AddItem';

export type Item ={ 
  product: string;
  amount: string;
}

function App() {

  const [items, setItems] = useState<Item[]>([]);
  
  const addItem = (item: Item) => {
  // item이라는 매개변수를 가지는데 Item 타입이다.
    setItems([item, ... items]);
    // 새롭게 집어넣는 items만 !
  }
  return (
    <>
      <Container>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant="h6">
              장바구니
            </Typography>
          </Toolbar>
        </AppBar>
        <AddItem addItem={addItem} />

          <List>
            {
              items.map((item, index) => 
                <ListItem key={index} divider>
                  <ListItemText
                    primary={item.product}
                    secondary={item.amount}/>
                    {/* // 글씨체를 의미 */}
                </ListItem>
              )
            }
          </List>
      </Container>
    </>
  )
}

// App 내부에 ClickButton , MyCard가 있다. 트리 구조 참조하기.
// 매번 props로 하는게 번거롭기 때문에 ContextAPI를 사용.  

export default App