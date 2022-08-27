export type ChessBoardConfiguration = {
    canvasLeft: number
    canvasTop: number
    canvasWidth: number
    canvasHeight: number

    boardLeft: number
    boardTop: number
    boardWidth: number
    boardHeight: number

    cellSizeX: number
    cellSizeY: number
}


export function ChessBoard({
                               canvasLeft,
                               canvasTop,
                               canvasWidth,
                               canvasHeight,
                               boardLeft,
                               boardTop,
                               boardWidth,
                               boardHeight,
                               cellSizeX,
                               cellSizeY
                           }: ChessBoardConfiguration) {
    const boardStrokeWidth = 1
    const rivierX = boardLeft
    const rivierY = boardTop + cellSizeY * 4
    const riverWidth = boardWidth
    const rivierHeight = cellSizeY

    let markerLength = 6;
    let markerPadding = 3;
    let topPawnRow = rivierY - cellSizeY;
    let bottomPawnRow = rivierY + rivierHeight + cellSizeY;

    let topCannonRow = topPawnRow - cellSizeY
    let bottomCannonRow = bottomPawnRow + cellSizeY

    let fontSize = 12;
    let magicPaddingNumber = fontSize/2; // Due to text line

    return (
        <svg width={canvasWidth} height={canvasHeight}>
            <defs>
                <g id="marker_1">
                    <line x1={markerPadding} y1={-markerPadding} x2={markerLength + markerPadding}
                          y2={-markerPadding} strokeWidth={1} stroke="#343434"/>
                    <line x1={markerPadding} y1={-(markerLength + markerPadding)} x2={markerPadding}
                          y2={-markerPadding} strokeWidth={1} stroke="#343434"/>
                </g>
                <g id="marker_2">
                    <line x1={markerPadding} y1={markerPadding} x2={markerLength + markerPadding} y2={markerPadding}
                          strokeWidth={1} stroke="#343434"/>
                    <line x1={markerPadding} y1={(markerLength + markerPadding)} x2={markerPadding}
                          y2={markerPadding} strokeWidth={1} stroke="#343434"/>
                </g>
                <g id="marker_3">
                    <line x1={-(markerPadding + markerLength)} y1={markerPadding} x2={-markerPadding}
                          y2={markerPadding} strokeWidth={1} stroke="#343434"/>
                    <line x1={-markerPadding} y1={markerPadding} x2={-markerPadding}
                          y2={markerPadding + markerLength} strokeWidth={1} stroke="#343434"/>
                </g>
                <g id="marker_4">
                    <line x1={-(markerPadding + markerLength)} y1={-markerPadding} x2={-markerPadding}
                          y2={-markerPadding} strokeWidth={1} stroke="#343434"/>
                    <line x1={-markerPadding} y1={-markerPadding} x2={-markerPadding}
                          y2={-(markerPadding + markerLength)} strokeWidth={1} stroke="#343434"/>
                </g>
            </defs>
            <rect x={canvasLeft} y={canvasTop} width={canvasWidth} height={canvasHeight} fill="none" strokeWidth={4}
                  stroke="#000"/>
            <rect x={boardLeft} y={boardTop} width={boardWidth} height={boardHeight} fill="none"
                  strokeWidth={boardStrokeWidth}
                  stroke="#000"/>
            {/* Horizontal lines first */}
            <line x1={boardLeft} y1={boardTop + cellSizeY} x2={boardLeft + boardWidth} y2={boardTop + cellSizeY}
                  strokeWidth={1} stroke="#000"/>
            <line x1={boardLeft} y1={boardTop + cellSizeY * 2} x2={boardLeft + boardWidth}
                  y2={boardTop + cellSizeY * 2} strokeWidth={1} stroke="#000"/>
            <line x1={boardLeft} y1={boardTop + cellSizeY * 3} x2={boardLeft + boardWidth}
                  y2={boardTop + cellSizeY * 3} strokeWidth={1} stroke="#000"/>
            <line x1={boardLeft} y1={boardTop + cellSizeY * 4} x2={boardLeft + boardWidth}
                  y2={boardTop + cellSizeY * 4} strokeWidth={1} stroke="#000"/>
            <line x1={boardLeft} y1={boardTop + cellSizeY * 5} x2={boardLeft + boardWidth}
                  y2={boardTop + cellSizeY * 5} strokeWidth={1} stroke="#000"/>
            <line x1={boardLeft} y1={boardTop + cellSizeY * 6} x2={boardLeft + boardWidth}
                  y2={boardTop + cellSizeY * 6} strokeWidth={1} stroke="#000"/>
            <line x1={boardLeft} y1={boardTop + cellSizeY * 7} x2={boardLeft + boardWidth}
                  y2={boardTop + cellSizeY * 7} strokeWidth={1} stroke="#000"/>
            <line x1={boardLeft} y1={boardTop + cellSizeY * 8} x2={boardLeft + boardWidth}
                  y2={boardTop + cellSizeY * 8} strokeWidth={1} stroke="#000"/>

            {/* Now, draw vertical lines for top half */}
            <line x1={rivierX + cellSizeX} y1={boardTop} x2={rivierX + cellSizeX} y2={rivierY} strokeWidth={1}
                  stroke="#000"/>
            <line x1={rivierX + cellSizeX * 2} y1={boardTop} x2={rivierX + cellSizeX * 2} y2={rivierY}
                  strokeWidth={1} stroke="#000"/>
            <line x1={rivierX + cellSizeX * 3} y1={boardTop} x2={rivierX + cellSizeX * 3} y2={rivierY}
                  strokeWidth={1} stroke="#000"/>
            <line x1={rivierX + cellSizeX * 4} y1={boardTop} x2={rivierX + cellSizeX * 4} y2={rivierY}
                  strokeWidth={1} stroke="#000"/>
            <line x1={rivierX + cellSizeX * 5} y1={boardTop} x2={rivierX + cellSizeX * 5} y2={rivierY}
                  strokeWidth={1} stroke="#000"/>
            <line x1={rivierX + cellSizeX * 6} y1={boardTop} x2={rivierX + cellSizeX * 6} y2={rivierY}
                  strokeWidth={1} stroke="#000"/>
            <line x1={rivierX + cellSizeX * 7} y1={boardTop} x2={rivierX + cellSizeX * 7} y2={rivierY}
                  strokeWidth={1} stroke="#000"/>

            {/* Now, draw vertical lines for bottom half */}
            <line x1={rivierX + cellSizeX} y1={rivierY + rivierHeight} x2={rivierX + cellSizeX}
                  y2={boardTop + boardHeight} strokeWidth={1} stroke="#000"/>
            <line x1={rivierX + cellSizeX * 2} y1={rivierY + rivierHeight} x2={rivierX + cellSizeX * 2}
                  y2={boardTop + boardHeight} strokeWidth={1} stroke="#000"/>
            <line x1={rivierX + cellSizeX * 3} y1={rivierY + rivierHeight} x2={rivierX + cellSizeX * 3}
                  y2={boardTop + boardHeight} strokeWidth={1} stroke="#000"/>
            <line x1={rivierX + cellSizeX * 4} y1={rivierY + rivierHeight} x2={rivierX + cellSizeX * 4}
                  y2={boardTop + boardHeight} strokeWidth={1} stroke="#000"/>
            <line x1={rivierX + cellSizeX * 5} y1={rivierY + rivierHeight} x2={rivierX + cellSizeX * 5}
                  y2={boardTop + boardHeight} strokeWidth={1} stroke="#000"/>
            <line x1={rivierX + cellSizeX * 6} y1={rivierY + rivierHeight} x2={rivierX + cellSizeX * 6}
                  y2={boardTop + boardHeight} strokeWidth={1} stroke="#000"/>
            <line x1={rivierX + cellSizeX * 7} y1={rivierY + rivierHeight} x2={rivierX + cellSizeX * 7}
                  y2={boardTop + boardHeight} strokeWidth={1} stroke="#000"/>

            {/* Draw markers */}
            <g>
                {/* Top */}
                <use x={rivierX} y={topPawnRow} xlinkHref="#marker_1"/>
                <use x={rivierX} y={topPawnRow} xlinkHref="#marker_2"/>

                <use x={rivierX + cellSizeX * 2} y={topPawnRow} xlinkHref="#marker_1"/>
                <use x={rivierX + cellSizeX * 2} y={topPawnRow} xlinkHref="#marker_2"/>
                <use x={rivierX + cellSizeX * 2} y={topPawnRow} xlinkHref="#marker_3"/>
                <use x={rivierX + cellSizeX * 2} y={topPawnRow} xlinkHref="#marker_4"/>

                <use x={rivierX + cellSizeX * 4} y={topPawnRow} xlinkHref="#marker_1"/>
                <use x={rivierX + cellSizeX * 4} y={topPawnRow} xlinkHref="#marker_2"/>
                <use x={rivierX + cellSizeX * 4} y={topPawnRow} xlinkHref="#marker_3"/>
                <use x={rivierX + cellSizeX * 4} y={topPawnRow} xlinkHref="#marker_4"/>

                <use x={rivierX + cellSizeX * 6} y={topPawnRow} xlinkHref="#marker_1"/>
                <use x={rivierX + cellSizeX * 6} y={topPawnRow} xlinkHref="#marker_2"/>
                <use x={rivierX + cellSizeX * 6} y={topPawnRow} xlinkHref="#marker_3"/>
                <use x={rivierX + cellSizeX * 6} y={topPawnRow} xlinkHref="#marker_4"/>

                <use x={rivierX + riverWidth} y={topPawnRow} xlinkHref="#marker_3"/>
                <use x={rivierX + riverWidth} y={topPawnRow} xlinkHref="#marker_4"/>

                {/* Cannon */}
                <use x={rivierX + cellSizeX} y={topCannonRow} xlinkHref="#marker_1"/>
                <use x={rivierX + cellSizeX} y={topCannonRow} xlinkHref="#marker_2"/>
                <use x={rivierX + cellSizeX} y={topCannonRow} xlinkHref="#marker_3"/>
                <use x={rivierX + cellSizeX} y={topCannonRow} xlinkHref="#marker_4"/>

                <use x={rivierX + cellSizeX * 7} y={topCannonRow} xlinkHref="#marker_1"/>
                <use x={rivierX + cellSizeX * 7} y={topCannonRow} xlinkHref="#marker_2"/>
                <use x={rivierX + cellSizeX * 7} y={topCannonRow} xlinkHref="#marker_3"/>
                <use x={rivierX + cellSizeX * 7} y={topCannonRow} xlinkHref="#marker_4"/>

                {/* Bottom */}
                <use x={rivierX} y={bottomPawnRow} xlinkHref="#marker_1"/>
                <use x={rivierX} y={bottomPawnRow} xlinkHref="#marker_2"/>

                <use x={rivierX + cellSizeX * 2} y={bottomPawnRow} xlinkHref="#marker_1"/>
                <use x={rivierX + cellSizeX * 2} y={bottomPawnRow} xlinkHref="#marker_2"/>
                <use x={rivierX + cellSizeX * 2} y={bottomPawnRow} xlinkHref="#marker_3"/>
                <use x={rivierX + cellSizeX * 2} y={bottomPawnRow} xlinkHref="#marker_4"/>

                <use x={rivierX + cellSizeX * 4} y={bottomPawnRow} xlinkHref="#marker_1"/>
                <use x={rivierX + cellSizeX * 4} y={bottomPawnRow} xlinkHref="#marker_2"/>
                <use x={rivierX + cellSizeX * 4} y={bottomPawnRow} xlinkHref="#marker_3"/>
                <use x={rivierX + cellSizeX * 4} y={bottomPawnRow} xlinkHref="#marker_4"/>

                <use x={rivierX + cellSizeX * 6} y={bottomPawnRow} xlinkHref="#marker_1"/>
                <use x={rivierX + cellSizeX * 6} y={bottomPawnRow} xlinkHref="#marker_2"/>
                <use x={rivierX + cellSizeX * 6} y={bottomPawnRow} xlinkHref="#marker_3"/>
                <use x={rivierX + cellSizeX * 6} y={bottomPawnRow} xlinkHref="#marker_4"/>

                <use x={rivierX + riverWidth} y={bottomPawnRow} xlinkHref="#marker_3"/>
                <use x={rivierX + riverWidth} y={bottomPawnRow} xlinkHref="#marker_4"/>

                {/* Cannon */}
                <use x={rivierX + cellSizeX} y={bottomCannonRow} xlinkHref="#marker_1"/>
                <use x={rivierX + cellSizeX} y={bottomCannonRow} xlinkHref="#marker_2"/>
                <use x={rivierX + cellSizeX} y={bottomCannonRow} xlinkHref="#marker_3"/>
                <use x={rivierX + cellSizeX} y={bottomCannonRow} xlinkHref="#marker_4"/>

                <use x={rivierX + cellSizeX * 7} y={bottomCannonRow} xlinkHref="#marker_1"/>
                <use x={rivierX + cellSizeX * 7} y={bottomCannonRow} xlinkHref="#marker_2"/>
                <use x={rivierX + cellSizeX * 7} y={bottomCannonRow} xlinkHref="#marker_3"/>
                <use x={rivierX + cellSizeX * 7} y={bottomCannonRow} xlinkHref="#marker_4"/>

            </g>
            <g>
                {/* Draw top citadel */}
                <line x1={boardLeft + cellSizeX * 3} y1={boardTop} x2={boardLeft + cellSizeX * 5}
                      y2={boardTop + cellSizeY * 2} strokeWidth={1} stroke="#000"/>
                <line x1={boardLeft + cellSizeX * 3} y1={boardTop + cellSizeY * 2} x2={boardLeft + cellSizeX * 5}
                      y2={boardTop} strokeWidth={1} stroke="#000"/>

                {/* Draw bottom citadel */}
                <line x1={boardLeft + cellSizeX * 3} y1={(boardTop + boardHeight) - cellSizeY * 2}
                      x2={boardLeft + cellSizeX * 5}
                      y2={boardTop + boardHeight} strokeWidth={1} stroke="#000"/>
                <line x1={boardLeft + cellSizeX * 3} y1={boardTop + boardHeight} x2={boardLeft + cellSizeX * 5}
                      y2={(boardTop + boardHeight) - cellSizeY * 2} strokeWidth={1} stroke="#000"/>
            </g>
            <g>
                {/*  Draw top column numbers   */}
                <text x={boardLeft - 3} y={Math.round((boardTop - canvasTop) * 0.45)} fontSize={fontSize}>1</text>
                <text x={boardLeft + cellSizeX - 3} y={Math.round((boardTop - canvasTop) * 0.45)} fontSize={fontSize}>2
                </text>
                <text x={boardLeft + cellSizeX * 2 - 3} y={Math.round((boardTop - canvasTop) * 0.45)} fontSize={fontSize}>3
                </text>
                <text x={boardLeft + cellSizeX * 3 - 3} y={Math.round((boardTop - canvasTop) * 0.45)} fontSize={fontSize}>4
                </text>
                <text x={boardLeft + cellSizeX * 4 - 3} y={Math.round((boardTop - canvasTop) * 0.45)} fontSize={fontSize}>5
                </text>
                <text x={boardLeft + cellSizeX * 5 - 3} y={Math.round((boardTop - canvasTop) * 0.45)} fontSize={fontSize}>6
                </text>
                <text x={boardLeft + cellSizeX * 6 - 3} y={Math.round((boardTop - canvasTop) * 0.45)} fontSize={fontSize}>7
                </text>
                <text x={boardLeft + cellSizeX * 7 - 3} y={Math.round((boardTop - canvasTop) * 0.45)} fontSize={fontSize}>8
                </text>
                <text x={boardLeft + boardWidth - 3} y={Math.round((boardTop - canvasTop) * 0.45)} fontSize={fontSize}>9
                </text>

                {/*  Draw bottom column numbers   九八七六五四三二一*/}
                <text x={boardLeft - 3 * 2} y={Math.ceil((canvasHeight - boardHeight - magicPaddingNumber) * 0.45) + boardHeight + boardTop}
                      fontSize={fontSize}>九
                </text>
                <text x={boardLeft + cellSizeX - 3 * 2}
                      y={Math.round((canvasHeight - boardHeight - magicPaddingNumber) * 0.45) + boardHeight + boardTop} fontSize={fontSize}>八
                </text>
                <text x={boardLeft + cellSizeX * 2 - 3 * 2}
                      y={Math.round((canvasHeight - boardHeight - magicPaddingNumber) * 0.45) + boardHeight + boardTop} fontSize={fontSize}>七
                </text>
                <text x={boardLeft + cellSizeX * 3 - 3 * 2}
                      y={Math.round((canvasHeight - boardHeight - magicPaddingNumber) * 0.45) + boardHeight + boardTop} fontSize={fontSize}>六
                </text>
                <text x={boardLeft + cellSizeX * 4 - 3 * 2}
                      y={Math.round((canvasHeight - boardHeight - magicPaddingNumber) * 0.45) + boardHeight + boardTop} fontSize={fontSize}>五
                </text>
                <text x={boardLeft + cellSizeX * 5 - 3 * 2}
                      y={Math.round((canvasHeight - boardHeight - magicPaddingNumber) * 0.45) + boardHeight + boardTop} fontSize={fontSize}>四
                </text>
                <text x={boardLeft + cellSizeX * 6 - 3 * 2}
                      y={Math.round((canvasHeight - boardHeight - magicPaddingNumber) * 0.45) + boardHeight + boardTop} fontSize={fontSize}>三
                </text>
                <text x={boardLeft + cellSizeX * 7 - 3 * 2}
                      y={Math.round((canvasHeight - boardHeight - magicPaddingNumber) * 0.45) + boardHeight + boardTop} fontSize={fontSize}>二
                </text>
                <text x={boardLeft + boardWidth - 3 * 2}
                      y={Math.round((canvasHeight - boardHeight - magicPaddingNumber) * 0.45) + boardHeight + boardTop} fontSize={fontSize}>一
                </text>
            </g>
        </svg>
    )
}
