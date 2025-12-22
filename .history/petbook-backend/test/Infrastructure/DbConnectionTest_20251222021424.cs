using DotNetEnv;
using Xunit;
using Npgsql;
using FluentAssertions;
using System.Threading.Tasks;

namespace test.Infrastructure
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
            var config = new DatabaseConfig
            {
                CS = _connectionString ?? ""
            };
        
            // When
        
            // Then
            config.CS.Should().NotBeNullOrEmpty();
        }

        [Fact]
        public async Task ShouldConnectToDb()
        {
            // Given
            _connectionString.Should.NotBeNullOrEmpty("because DB connection string must exist in .env");
            await using var connection = new NpgsqlConnection(_connectionString);
            Exception? error = null;

            // When
            try
            {
                await connection.OpenAsync();
            }
            catch(Exception ex)
            {
                error = ex;
            }
        
            // Then
            error.Should().BeNull("because the DB should accept connections");
            connection.State.Should().Be(System.Data.ConnectionState.Open);
        }


    }
}