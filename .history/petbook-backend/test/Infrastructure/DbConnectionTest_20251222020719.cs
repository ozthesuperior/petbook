using DotNetEnv;
using Xunit;
using Npgsql;

namespace test
{
    public class DbConnectionTest
    {
        private readonly string? _connectionString;

        public DbConnectionTest()
        {
            Env.Load("../../../.env");
            _connectionString.Environment.GetEnvironmentVariable("CONNECTION_STRING");
        }

        [Fact]
        public void LoadConnectionString_ShouldLoadFromEnv()
        {
            // Given
        
            // When
        
            // Then
        }]


    }
}