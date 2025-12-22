using DotNetEnv;
using Xunit;
using Npgsql;
using FluentAssertions;

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
        public void ShouldConnectToDb()
        {
            // Given
        
            // When
        
            // Then
        }


    }
}