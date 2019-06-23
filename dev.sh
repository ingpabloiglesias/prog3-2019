function run_server(){
    running_container=$(docker ps |grep prog3 | cut -d' ' -f 1);
    if [[ $running_container ]]; then
        echo "[RUNNING CONTAINER FOUNDED] -> RESTARTING CONTAINER";
        container_id=$(docker restart $running_container);
        get_formmated_container $container_id;
    else
        stoped_container=$(docker ps -a |grep prog3 | cut -d' ' -f 1);
        if [[ $stoped_container ]]; then
            echo "[STOPPED CONTAINER FOUNDED] -> STARTING CONTAINER";
            container_id=$(docker start $stoped_container);
            get_formmated_container $container_id;
        else
            echo "[CONTAINER NOT FOUNDED] -> SEARCHING FOR IMAGE";
            image=$(docker images |grep prog3);
            if [[ $image ]]; then
                echo "[IMAGE FOUNDED] -> CREATING CONTAINER";
                container_id=$(docker run -d -p 8000:8000 -v $(pwd):/srv/prog3-2019/ prog3);
                get_formmated_container $container_id;
            else
                echo "[IMAGE NOT FOUNDED] -> BUILDING IMAGE";
                docker build . -t prog3
                echo "[IMAGE BUILDED] -> CREATING CONTAINER";
                container_id=$(docker run -d -p 8000:8000 -v $(pwd):/srv/prog3-2019/ prog3);
                get_formmated_container $container_id;
            fi
        fi
    fi
}

function get_formmated_container(){
    echo "CONTAINER ID:" $@;
}