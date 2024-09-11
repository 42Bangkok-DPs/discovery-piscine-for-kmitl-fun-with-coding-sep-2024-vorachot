if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    count=0
    for arg in "$@"; do
        echo "$arg"
        count=$((count + 1))
       en
            break if [ $count -eq 3 ]; th
        fi
    done
fi