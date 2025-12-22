using DotNetEnv;

namespace test
{
    public class DbConnectionTest
    {
        private readonly string? _connectionString;

        public DbConnectionTest()
        {
            Env.Load("../.env");
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