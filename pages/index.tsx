import type {NextPage} from 'next'
import {ChessBoard} from "../components/ChessBoard";
import BlackAdvisor from "../themes/pieces/commons_xiangqi_pieces_print_2010_bw_heavy/black_advisor.svg"
import BlackCannon from "../themes/pieces/commons_xiangqi_pieces_print_2010_bw_heavy/black_cannon.svg"
import BlackChariot from "../themes/pieces/commons_xiangqi_pieces_print_2010_bw_heavy/black_chariot.svg"
import BlackElephant from "../themes/pieces/commons_xiangqi_pieces_print_2010_bw_heavy/black_elephant.svg"
import BlackHorse from "../themes/pieces/commons_xiangqi_pieces_print_2010_bw_heavy/black_horse.svg"
import BlackKing from "../themes/pieces/commons_xiangqi_pieces_print_2010_bw_heavy/black_king.svg"
import BlackPawn from "../themes/pieces/commons_xiangqi_pieces_print_2010_bw_heavy/black_pawn.svg"

import RedAdvisor from "../themes/pieces/commons_xiangqi_pieces_print_2010_bw_heavy/red_advisor.svg"
import RedCannon from "../themes/pieces/commons_xiangqi_pieces_print_2010_bw_heavy/red_cannon.svg"
import RedChariot from "../themes/pieces/commons_xiangqi_pieces_print_2010_bw_heavy/red_chariot.svg"
import RedElephant from "../themes/pieces/commons_xiangqi_pieces_print_2010_bw_heavy/red_elephant.svg"
import RedHorse from "../themes/pieces/commons_xiangqi_pieces_print_2010_bw_heavy/red_horse.svg"
import RedKing from "../themes/pieces/commons_xiangqi_pieces_print_2010_bw_heavy/red_king.svg"
import RedPawn from "../themes/pieces/commons_xiangqi_pieces_print_2010_bw_heavy/red_pawn.svg"


const Home: NextPage = () => {
    let canvasLeft = 0
    let canvasTop = 0
    let canvasWidth = 345;
    let canvasHeight = 375;

    const boardPaddingX = 30
    const boardPaddingY = 30

    const boardLeft = canvasLeft + boardPaddingX
    const boardTop = canvasTop + boardPaddingY
    const boardWidth = canvasWidth - boardPaddingX * 2
    const boardHeight = canvasHeight - boardPaddingY * 2
    const boardStrokeWidth = 1

    const cellSizeX = Math.ceil((boardWidth - boardStrokeWidth * 2) / 8)
    const cellSizeY = Math.ceil((boardHeight - boardStrokeWidth * 2) / 9)

    console.log({cellSizeX, cellSizeY})

    let pieceSize = 100
    let pieceZoomRatio = 3.5

    let pieceSizeAfterZoom = pieceSize * pieceZoomRatio
    let halfPieceSize = Math.round(pieceSize / (pieceZoomRatio * 2));
    let chessBoardZoomRatio = 1;
    return (
        <div>
            <svg width={canvasWidth*chessBoardZoomRatio} height={canvasHeight*chessBoardZoomRatio} viewBox={`0 0 ${canvasWidth} ${canvasHeight}`}>
                <svg width={canvasWidth} height={canvasHeight}>
                <ChessBoard
                    canvasLeft={canvasLeft}
                    canvasTop={canvasTop}
                    canvasWidth={canvasWidth}
                    canvasHeight={canvasHeight}
                    boardLeft={boardLeft}
                    boardTop={boardTop}
                    boardWidth={boardWidth}
                    boardHeight={boardHeight}
                    cellSizeX={cellSizeX}
                    cellSizeY={cellSizeY}
                />
                <g id="BlackClan">
                    <BlackKing x={boardLeft + cellSizeX * 4 - halfPieceSize} y={boardTop - halfPieceSize}
                               viewBox={`0 0 ${pieceSizeAfterZoom} ${pieceSizeAfterZoom}`}/>
                    <BlackAdvisor x={boardLeft + cellSizeX * 3 - halfPieceSize} y={boardTop - halfPieceSize}
                                  viewBox={`0 0 ${pieceSizeAfterZoom} ${pieceSizeAfterZoom}`}/>
                    <BlackAdvisor x={boardLeft + cellSizeX * 5 - halfPieceSize} y={boardTop - halfPieceSize}
                                  viewBox={`0 0 ${pieceSizeAfterZoom} ${pieceSizeAfterZoom}`}/>
                    <BlackElephant x={boardLeft + cellSizeX * 2 - halfPieceSize} y={boardTop - halfPieceSize}
                                   viewBox={`0 0 ${pieceSizeAfterZoom} ${pieceSizeAfterZoom}`}/>
                    <BlackElephant x={boardLeft + cellSizeX * 6 - halfPieceSize} y={boardTop - halfPieceSize}
                                   viewBox={`0 0 ${pieceSizeAfterZoom} ${pieceSizeAfterZoom}`}/>
                    <BlackHorse x={boardLeft + cellSizeX * 1 - halfPieceSize} y={boardTop - halfPieceSize}
                                viewBox={`0 0 ${pieceSizeAfterZoom} ${pieceSizeAfterZoom}`}/>
                    <BlackHorse x={boardLeft + cellSizeX * 7 - halfPieceSize} y={boardTop - halfPieceSize}
                                viewBox={`0 0 ${pieceSizeAfterZoom} ${pieceSizeAfterZoom}`}/>
                    <BlackChariot x={boardLeft + cellSizeX * 0 - halfPieceSize} y={boardTop - halfPieceSize}
                                  viewBox={`0 0 ${pieceSizeAfterZoom} ${pieceSizeAfterZoom}`}/>
                    <BlackChariot x={boardLeft + boardWidth - halfPieceSize} y={boardTop - halfPieceSize}
                                  viewBox={`0 0 ${pieceSizeAfterZoom} ${pieceSizeAfterZoom}`}/>
                    <BlackCannon x={boardLeft + cellSizeX * 1 - halfPieceSize}
                                 y={boardTop + cellSizeY * 2 - halfPieceSize}
                                 viewBox={`0 0 ${pieceSizeAfterZoom} ${pieceSizeAfterZoom}`}/>
                    <BlackCannon x={boardLeft + cellSizeX * 7 - halfPieceSize}
                                 y={boardTop + cellSizeY * 2 - halfPieceSize}
                                 viewBox={`0 0 ${pieceSizeAfterZoom} ${pieceSizeAfterZoom}`}/>
                    <BlackPawn x={boardLeft + cellSizeX * 0 - halfPieceSize}
                               y={boardTop + cellSizeY * 3 - halfPieceSize}
                               viewBox={`0 0 ${pieceSizeAfterZoom} ${pieceSizeAfterZoom}`}/>
                    <BlackPawn x={boardLeft + cellSizeX * 2 - halfPieceSize}
                               y={boardTop + cellSizeY * 3 - halfPieceSize}
                               viewBox={`0 0 ${pieceSizeAfterZoom} ${pieceSizeAfterZoom}`}/>
                    <BlackPawn x={boardLeft + cellSizeX * 4 - halfPieceSize}
                               y={boardTop + cellSizeY * 3 - halfPieceSize}
                               viewBox={`0 0 ${pieceSizeAfterZoom} ${pieceSizeAfterZoom}`}/>
                    <BlackPawn x={boardLeft + cellSizeX * 6 - halfPieceSize}
                               y={boardTop + cellSizeY * 3 - halfPieceSize}
                               viewBox={`0 0 ${pieceSizeAfterZoom} ${pieceSizeAfterZoom}`}/>
                    <BlackPawn x={boardLeft + boardWidth - halfPieceSize} y={boardTop + cellSizeY * 3 - halfPieceSize}
                               viewBox={`0 0 ${pieceSizeAfterZoom} ${pieceSizeAfterZoom}`}/>
                </g>
                <g id="RedClan">
                    <RedKing x={boardLeft + cellSizeX * 4 - halfPieceSize} y={boardTop + boardHeight - halfPieceSize}
                             viewBox={`0 0 ${pieceSizeAfterZoom} ${pieceSizeAfterZoom}`}/>
                    <RedAdvisor x={boardLeft + cellSizeX * 3 - halfPieceSize} y={boardTop + boardHeight - halfPieceSize}
                                viewBox={`0 0 ${pieceSizeAfterZoom} ${pieceSizeAfterZoom}`}/>
                    <RedAdvisor x={boardLeft + cellSizeX * 5 - halfPieceSize} y={boardTop + boardHeight - halfPieceSize}
                                viewBox={`0 0 ${pieceSizeAfterZoom} ${pieceSizeAfterZoom}`}/>
                    <RedElephant x={boardLeft + cellSizeX * 2 - halfPieceSize}
                                 y={boardTop + boardHeight - halfPieceSize}
                                 viewBox={`0 0 ${pieceSizeAfterZoom} ${pieceSizeAfterZoom}`}/>
                    <RedElephant x={boardLeft + cellSizeX * 6 - halfPieceSize}
                                 y={boardTop + boardHeight - halfPieceSize}
                                 viewBox={`0 0 ${pieceSizeAfterZoom} ${pieceSizeAfterZoom}`}/>
                    <RedHorse x={boardLeft + cellSizeX * 1 - halfPieceSize} y={boardTop + boardHeight - halfPieceSize}
                              viewBox={`0 0 ${pieceSizeAfterZoom} ${pieceSizeAfterZoom}`}/>
                    <RedHorse x={boardLeft + cellSizeX * 7 - halfPieceSize} y={boardTop + boardHeight - halfPieceSize}
                              viewBox={`0 0 ${pieceSizeAfterZoom} ${pieceSizeAfterZoom}`}/>
                    <RedChariot x={boardLeft + cellSizeX * 0 - halfPieceSize} y={boardTop + boardHeight - halfPieceSize}
                                viewBox={`0 0 ${pieceSizeAfterZoom} ${pieceSizeAfterZoom}`}/>
                    <RedChariot x={boardLeft + boardWidth - halfPieceSize} y={boardTop + boardHeight - halfPieceSize}
                                viewBox={`0 0 ${pieceSizeAfterZoom} ${pieceSizeAfterZoom}`}/>
                    <RedCannon x={boardLeft + cellSizeX * 1 - halfPieceSize}
                               y={boardTop + boardHeight - cellSizeY * 2 - halfPieceSize}
                               viewBox={`0 0 ${pieceSizeAfterZoom} ${pieceSizeAfterZoom}`}/>
                    <RedCannon x={boardLeft + cellSizeX * 7 - halfPieceSize}
                               y={boardTop + boardHeight - cellSizeY * 2 - halfPieceSize}
                               viewBox={`0 0 ${pieceSizeAfterZoom} ${pieceSizeAfterZoom}`}/>
                    <RedPawn x={boardLeft + cellSizeX * 0 - halfPieceSize}
                             y={boardTop + boardHeight - cellSizeY * 3 - halfPieceSize}
                             viewBox={`0 0 ${pieceSizeAfterZoom} ${pieceSizeAfterZoom}`}/>
                    <RedPawn x={boardLeft + cellSizeX * 2 - halfPieceSize}
                             y={boardTop + boardHeight - cellSizeY * 3 - halfPieceSize}
                             viewBox={`0 0 ${pieceSizeAfterZoom} ${pieceSizeAfterZoom}`}/>
                    <RedPawn x={boardLeft + cellSizeX * 4 - halfPieceSize}
                             y={boardTop + boardHeight - cellSizeY * 3 - halfPieceSize}
                             viewBox={`0 0 ${pieceSizeAfterZoom} ${pieceSizeAfterZoom}`}/>
                    <RedPawn x={boardLeft + cellSizeX * 6 - halfPieceSize}
                             y={boardTop + boardHeight - cellSizeY * 3 - halfPieceSize}
                             viewBox={`0 0 ${pieceSizeAfterZoom} ${pieceSizeAfterZoom}`}/>
                    <RedPawn x={boardLeft + boardWidth - halfPieceSize}
                             y={boardTop + boardHeight - cellSizeY * 3 - halfPieceSize}
                             viewBox={`0 0 ${pieceSizeAfterZoom} ${pieceSizeAfterZoom}`}/>
                </g>
            </svg>
            </svg>
        </div>
    );
}

export default Home
