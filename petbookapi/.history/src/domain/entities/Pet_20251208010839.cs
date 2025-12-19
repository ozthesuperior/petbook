using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace petbookapi.domain
{
    public class Pet
    {
        public Guid Id { get; private set; }
        public String Name { get; private set; }
    }
}