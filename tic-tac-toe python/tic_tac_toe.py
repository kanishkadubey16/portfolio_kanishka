def print_board(board):
    """Function to print the Tic Tac Toe board."""
    print(f"{board[0]} | {board[1]} | {board[2]}")
    print("--|---|--")
    print(f"{board[3]} | {board[4]} | {board[5]}")
    print("--|---|--")
    print(f"{board[6]} | {board[7]} | {board[8]}")

def check_winner(board, player):
    """Function to check if the given player has won."""
    win_combinations = [
        (0, 1, 2), (3, 4, 5), (6, 7, 8),  # Rows
        (0, 3, 6), (1, 4, 7), (2, 5, 8),  # Columns
        (0, 4, 8), (2, 4, 6)  # Diagonals
    ]
    
    for combination in win_combinations:
        if board[combination[0]] == board[combination[1]] == board[combination[2]] == player:
            return True
    return False

def is_board_full(board):
    """Check if the board is full."""
    return " " not in board

def tic_tac_toe():
    board = [" "] * 9  # Create an empty board
    current_player = "X"  # Player X starts
    
    while True:
        print_board(board)
        
        # Get user input for the position
        try:
            position = int(input(f"Player {current_player}'s turn. Enter a position (0-8): "))
        except ValueError:
            print("Invalid input! Please enter a number between 0 and 8.")
            continue
        
        # Check for valid position (between 0 and 8)
        if position < 0 or position > 8:
            print("Invalid input! Please enter a number between 0 and 8.")
            continue
        
        # Check if the position is already occupied
        if board[position] != " ":
            print("Invalid move! The position is already occupied.")
            continue
        
        # Make the move
        board[position] = current_player
        
        # Check if the current player won
        if check_winner(board, current_player):
            print_board(board)
            print(f"Player {current_player} wins!")
            break
        
        # Check if the game is a draw (board is full and no winner)
        if is_board_full(board):
            print_board(board)
            print("It's a draw!")
            break
        
        # Switch players (X <-> O)
        current_player = "O" if current_player == "X" else "X"

if __name__ == "__main__":
    print("Welcome to Tic Tac Toe!")
    tic_tac_toe()
