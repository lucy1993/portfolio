
import React, { useState, useEffect, useRef } from 'react';
import ArrowKeysReact from 'arrow-keys-react';
import { v4 as uuidv4 } from 'uuid';

const classedNumb = {
  2: 'two',
  4: 'four',
  8: 'eight',
  16: 'sixteen',
  32: 'thirty-two',
  64: 'sixty-four',
  128: 'h-t-e',
  256: 't-f-s',
  512: 'f-o-t',
  1024: 'o-z-t-f',
  2048: 't-z-f-e'
}

function Game() {
  const initPageRef = useRef();
  const [keyState, setKeyState] = useState(null);
  const [gameState, setGameState] = useState(null);
  const [randomState, setRandomState] = useState(true);
  const [scoreState, setScoreState] = useState(0);
  const[gifState, setGifState] = useState(true);
  const [data, setData] = useState([
    [0,0,2,0], 
    [0,0,0,0], 
    [0,0,0,0], 
    [0,0,0,0]
  ]);

  const handleNewGame = () => {
    setGameState('new')
    setScoreState(0)
    setData([
      [0,0,0,0], 
      [2,0,0,0], 
      [0,0,0,0], 
      [0,0,0,2]
    ])
  }

  useEffect(() => {
    initKeys();
    initPageRef.current.focus();
  });

  useEffect(() => {
    if(randomState) {
      let data = addRandomNumber()
      setData(data)
    }

    if(!handleCheckSteps(data)) {
      setGameState('lost');
    }
  }, [keyState]);

  const addRandomNumber = () => {
    const changeCurrentData = [...data];
    const randomParent = Math.floor(Math.random() * 4)
    const randomChild = Math.floor(Math.random() * 4)
    const twoOrFour = Math.floor(Math.random() * 6) + 1  < 4 ? 2 : 4
    if(changeCurrentData[randomParent][randomChild]) {
      return addRandomNumber()
    } else {
        changeCurrentData[randomParent][randomChild] = twoOrFour;
    }
    return changeCurrentData
  }

  const initKeys = () => {
    ArrowKeysReact.config({
      left: () => {
        handleArrows('left')
      },
      right: () => {
        handleArrows('right')
      },
      up: () => {
        handleArrows('up')
      },
      down: () => {
        handleArrows('down')
      }
    });
  }

  const handleSum = (modData, side) => {
    let newData = []
    modData.forEach(row => {
      let newRow = []
      row.map((col, colIndex) => {
        let innerRow = row
        if(col) {
          if(col === innerRow[colIndex+1]) {
            innerRow[colIndex+1] = 0
            newRow.push(col+col)
            if(col+col === 2048) setGameState('win')
            setScoreState(scoreState + col + col)
          } else newRow.push(col)
        }
        return innerRow
      })
      if(side === 'right') {
        newData.push(new Array(4-newRow.length).fill(0).concat(newRow))
      } else newData.push(newRow.concat(new Array(4-newRow.length).fill(0)))
    })
    return newData
  }

  const handleOrderArray = (modData, side) => {

    let newData = []
    let noM = 0
    modData.forEach(row => {
      let newRow = []
      row.forEach(col => {
        if(col) newRow.push(col)
      })
      if(newRow.length === 4) noM++
      if(side === 'right') {
        newData.push(new Array(4-newRow.length).fill(0).concat(newRow))
      } else newData.push(newRow.concat(new Array(4-newRow.length).fill(0)))
     
    })

    const sumData = handleSum(newData, side);

    if(noM === 4) {
      setRandomState(false);
    } else setRandomState(true);

    return sumData
  }

  const handleCheckSteps = (modData) => {
    let noStep = false
    modData.forEach(row => {
      row.map((col, colIndex) => {
        let innerRow = row
        if(col) {
          if(col === innerRow[colIndex+1]) {
            noStep = true
          } 
        } else noStep = true
      })
    })

    handleReverseArray(modData).forEach(row => {
      row.map((col, colIndex) => {
        let innerRow = row
        if(col) {
          if(col === innerRow[colIndex+1]) {
            noStep = true
          } 
        } else noStep = true
      })
    })
    return noStep
  }

  const handleReverseArray = (modData) => {
    let newData = []
    data.forEach((row, rowIndex) => {
      let newRow = []
      row.forEach((col, cilIndex) => {
        newRow.push(modData[cilIndex][rowIndex]);
      })
      newData.push(newRow)
    })

    return newData
  }

  const handleArrows = (eventSide) => {
    let mainData = null
    if(eventSide === 'left') {
      mainData = handleOrderArray(data, eventSide)
    }

    if(eventSide === 'right') {
      mainData = handleOrderArray(data, eventSide)
    }

    if(eventSide === 'up') {
      let newOrder = handleReverseArray(data)
      let changedOrder = handleOrderArray(newOrder, eventSide)
      mainData = handleReverseArray(changedOrder)
    }

    if(eventSide === 'down') {
      let newOrder = handleReverseArray(data)
      let changedOrder = handleOrderArray(newOrder, 'right')
      mainData = handleReverseArray(changedOrder)
    }

    if(mainData) setData(mainData)
    setKeyState(eventSide)
  }

  const handleCloseModal = () => {
    setGameState(null)
  }

  return (
    <div 
      className="game"
      ref={initPageRef}
      {...ArrowKeysReact.events} 
      tabIndex="2"
    >
      <div className='big-box-game'>
        <div className='box-game-header'>
          <div 
            className='new-game-btn'
            onClick={handleNewGame}
          > new game </div>
          <div className='new-score-btn'> score: {scoreState} </div>
        </div>
        <div className='intro-text'> please use your arrow keys to navigate </div>
        <div className='small-box-game'>
          {gameState === 'lost' ? <div className='pop-up-message'>
              <div className='image-gif-wrapper'>
                <div className='image-gif'>
                  <img 
                    src='https://firebasestorage.googleapis.com/v0/b/think-pink-fc784.appspot.com/o/2048-game-over.gif?alt=media&token=9cd7c0ae-cd48-495f-b584-820cee3d824f'
                    width='100%'
                  />
                </div>
              </div>
              <div className='message-wrap'>
                <h1 className='message-text'> game over! </h1>
                <div 
                  className='new-game-btn'
                  onClick={handleNewGame}
                > try again </div>
              </div>
          </div> : null}
          {gameState === 'win' ? <div className='pop-up-message'>
            <div className='image-gif-wrapper-win'>
              <div className='image-gif'>
                <img 
                  src='https://firebasestorage.googleapis.com/v0/b/think-pink-fc784.appspot.com/o/2048-win.gif?alt=media&token=862c30c8-a48a-458c-a4a8-cadbc236d12d'
                  width='100%'
                />
              </div>
            </div>
            <div className='message-wrap'>
              <h1 className='message-text'> you won! </h1>
              <div 
                className='new-game-btn'
                onClick={handleCloseModal}
              > continue  </div>
              <div 
                className='btn-text'
                onClick={handleNewGame}
              > start a new game </div>
            </div>
          </div> : null}
          {
            data && data.length ? data.map((row, indexRow) => {
              let classAnm = 'swipeAnimation';
              setTimeout(() => classAnm = ' ', 0);
              let rowAnimDir = indexRow;
              if(keyState === 'up') {
                rowAnimDir = 4-indexRow
              }
              return <div
              key={uuidv4()}
              className={`row`} > {
              row.map((col, indexCol) => {
                if(keyState === 'right') {
                  rowAnimDir = indexCol
                } else if(keyState === 'left') {
                  rowAnimDir = 4 - indexCol
                }
                return <div 
                style={{ animationDelay: `0.${rowAnimDir-1}s` }}
                key={Math.random()}
                className={`${col ? null : classAnm} box-game ${col ? classedNumb[col] : ''}`}> {col || null} 
              </div>
              })
            } </div>
            })
          : null
          }
        </div>
      </div>
    </div>
  );
}

export default Game;