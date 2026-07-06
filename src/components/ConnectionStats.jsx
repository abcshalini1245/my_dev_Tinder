import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";

const ConnectionStats = () => {

    const [stats,setStats]=useState(null);

    useEffect(()=>{

        fetchStats();

    },[]);

    const fetchStats=async()=>{

        try{

            const res=await axios.get(

                BASE_URL+"/stats",

                {

                    withCredentials:true

                }

            );

            setStats(res.data);

        }

        catch(err){

            console.log(err);

        }

    }

    if(!stats){

        return null;

    }

    return(

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto mb-8 my-4">

            <div className="stat bg-base-200 rounded-xl shadow px-4 py-3 min-h-0">

              <div className="stat-title text-sm">

                    👥 Connections

                </div>

               <div className="stat-value text-3xl text-primary">

                    {stats.connections}

                </div>

            </div>

                 <div className="stat bg-base-200 rounded-xl shadow px-4 py-3 min-h-0">

              <div className="stat-title text-sm">

                    ⏳ Pending

                </div>

                <div className="stat-value  text-3xl text-warning">

                    {stats.pending}

                </div>

            </div>

                 <div className="stat bg-base-200 rounded-xl shadow px-4 py-3 min-h-0">

              <div className="stat-title  text-sm">

                    ✅ Accepted

                </div>

                <div className="stat-value text-3xl text-success">

                    {stats.accepted}

                </div>

            </div>

                 <div className="stat bg-base-200 rounded-xl shadow px-4 py-3 min-h-0">

              <div className="stat-title text-sm">

                    ❌ Rejected

                </div>

                <div className="stat-value  text-3xl text-error">

                    {stats.rejected}

                </div>

            </div>

        </div>

    );

}

export default ConnectionStats;