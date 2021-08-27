import React from 'react'
import { Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class Sorter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      jogoAtual: [0, 0, 0, 0, 0, 0],
      ultimosJogos: [] 
    }
  }

  obterJogo = () => {
    this.setState({...this.state, ultimosJogos: this.state.ultimosJogos.push(this.state.jogoAtual)})
    const jogo = []
    do {
      let n = Math.round((Math.random() * 59) + 1)
      if (!jogo.includes(n))
        jogo.push(n)
    } while(jogo.length < 6)

    this.setState({ ...this.state, jogoAtual: jogo })
  }

  render() {
    return (
      <Card>
        <Card.Header className='d-flex justify-content-between'>
          <Card.Title>Mega Sena Sorter</Card.Title>
          <Button variant='success' onClick={this.obterJogo}>Sortear</Button>
        </Card.Header>

        <Card.Body>
          <div className='d-flex justify-content-around'>
            {this.state.jogoAtual.map((item, index) => (
              <Card border='secondary' className='w-2 m-2 p-4 text-center' key={index}>
                {item}
              </Card>
            ))}
          </div>
        </Card.Body>

        <Card.Footer className='mt-2'>
          <p>Últimos jogos:</p>

          {this.state.ultimosJogos.map((item, index) => (
            <div className='d-flex' key={index}>
              {item.map((sub, k) => (
                <p className='w-2 m-1' key={k}>{sub}</p>
              ))}
            </div>
          ))}
        </Card.Footer>
      </Card>
    )
  }
}

export default Sorter