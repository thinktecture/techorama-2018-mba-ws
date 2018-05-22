using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Azure.WebJobs.Host;

namespace TechoramaApi
{
    public static class SessionsApi
    {
        [FunctionName("ListSessions")]
        public static IEnumerable<SessionOverview> ListSessions(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "sessions")]
            HttpRequestMessage req,
            [DocumentDB("techorama", "sessions", SqlQuery ="SELECT c.id, c.title FROM c",
                ConnectionStringSetting ="Db")]
            IEnumerable<SessionOverview> sessions,
            TraceWriter log)
        {
            log.Info("ListSessions called...");

            // Any validation here... hm, maybe not...

            return sessions;
        }

        [FunctionName("GetSessionDetails")]
        public static SessionDetails GetSession(
           [HttpTrigger(AuthorizationLevel.Anonymous, "GET", Route = "sessions/{id}")]
            HttpRequestMessage req,
           [DocumentDB("techorama", "sessions", Id = "{id}", ConnectionStringSetting = "Db")]
            SessionDetails session,
           TraceWriter log)
        {
            log.Info("GetSession function processed a request: " + session.Id);

            return session;
        }
        
        [FunctionName("AddSession")]
        public static async Task<HttpResponseMessage> AddSession(
            [HttpTrigger(AuthorizationLevel.Anonymous, "POST", Route = "sessions")]
            SessionDetails session,
            [DocumentDB("techorama", "sessions", Id="Id", ConnectionStringSetting = "Db")]
            IAsyncCollector<SessionDetails> documents,
            TraceWriter log)
        {
            log.Info("AddSession function processed a request: " + session.Id);

            await documents.AddAsync(session);

            return await Task.FromResult(new HttpResponseMessage(HttpStatusCode.Created));
        }
    }
}
