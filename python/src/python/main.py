import budoux
import json
import os

def process_all_texts_with_budoux(input_dir, output_dir):
    """
    指定されたディレクトリ内のすべてのTXTファイルをBudouXで処理し、
    結果をJSONファイルとして別のディレクトリに保存します。
    """
    # 出力ディレクトリが存在しない場合は作成
    os.makedirs(output_dir, exist_ok=True)
    
    # BudouXの日本語パーサーをロード
    parser = budoux.load_default_japanese_parser()
    
    # 入力ディレクトリ内のすべてのファイルをリストアップ
    for filename in os.listdir(input_dir):
        if filename.endswith(".txt"):
            input_filepath = os.path.join(input_dir, filename)
            # .txt を .json に変更して出力ファイル名を生成
            output_filename = filename.replace(".txt", ".json")
            output_filepath = os.path.join(output_dir, output_filename)
            
            print(f"Processing {input_filepath}...")
            
            try:
                with open(input_filepath, 'r', encoding='utf-8') as f_in:
                    full_text = f_in.read() # ファイル全体を読み込み

                    # BudouXで文章を分割
                    segments = parser.parse(full_text)
                
                with open(output_filepath, 'w', encoding='utf-8') as f_out:
                    json.dump(segments, f_out, ensure_ascii=False, indent=2)
                
                print(f"Saved to {output_filepath}")
            except FileNotFoundError:
                print(f"Error: File '{input_filepath}' not found.")
            except Exception as e:
                print(f"An error occurred while processing '{filename}': {e}")

if __name__ == "__main__":
    input_directory = "../assets/texts/"
    output_directory = "../assets/json/"

    process_all_texts_with_budoux(input_directory, output_directory)
    print("\nAll specified text files have been processed.")