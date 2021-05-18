var documenterSearchIndex = {"docs":
[{"location":"#Sparse-Linear-Algebra","page":"SuiteSparse","title":"Sparse Linear Algebra","text":"","category":"section"},{"location":"","page":"SuiteSparse","title":"SuiteSparse","text":"DocTestSetup = :(using LinearAlgebra, SparseArrays, SuiteSparse)","category":"page"},{"location":"","page":"SuiteSparse","title":"SuiteSparse","text":"Sparse matrix solvers call functions from SuiteSparse. The following factorizations are available:","category":"page"},{"location":"","page":"SuiteSparse","title":"SuiteSparse","text":"Type Description\nSuiteSparse.CHOLMOD.Factor Cholesky factorization\nSuiteSparse.UMFPACK.UmfpackLU LU factorization\nSuiteSparse.SPQR.QRSparse QR factorization","category":"page"},{"location":"","page":"SuiteSparse","title":"SuiteSparse","text":"Other solvers such as Pardiso.jl are as external packages. Arpack.jl provides eigs and svds for iterative solution of eigensystems and singular value decompositions.","category":"page"},{"location":"","page":"SuiteSparse","title":"SuiteSparse","text":"These factorizations are described in the Linear Algebra section of the manual:","category":"page"},{"location":"","page":"SuiteSparse","title":"SuiteSparse","text":"cholesky\nldlt\nlu\nqr","category":"page"},{"location":"","page":"SuiteSparse","title":"SuiteSparse","text":"SuiteSparse.CHOLMOD.lowrankupdate\nSuiteSparse.CHOLMOD.lowrankupdate!\nSuiteSparse.CHOLMOD.lowrankdowndate\nSuiteSparse.CHOLMOD.lowrankdowndate!\nSuiteSparse.CHOLMOD.lowrankupdowndate!","category":"page"},{"location":"#SuiteSparse.CHOLMOD.lowrankupdate","page":"SuiteSparse","title":"SuiteSparse.CHOLMOD.lowrankupdate","text":"lowrankupdate(F::CHOLMOD.Factor, C::AbstractArray) -> FF::CHOLMOD.Factor\n\nGet an LDLt Factorization of A + C*C' given an LDLt or LLt factorization F of A.\n\nThe returned factor is always an LDLt factorization.\n\nSee also lowrankupdate!, lowrankdowndate, lowrankdowndate!.\n\n\n\n\n\n","category":"function"},{"location":"#SuiteSparse.CHOLMOD.lowrankupdate!","page":"SuiteSparse","title":"SuiteSparse.CHOLMOD.lowrankupdate!","text":"lowrankupdate!(F::CHOLMOD.Factor, C::AbstractArray)\n\nUpdate an LDLt or LLt Factorization F of A to a factorization of A + C*C'.\n\nLLt factorizations are converted to LDLt.\n\nSee also lowrankupdate, lowrankdowndate, lowrankdowndate!.\n\n\n\n\n\n","category":"function"},{"location":"#SuiteSparse.CHOLMOD.lowrankdowndate","page":"SuiteSparse","title":"SuiteSparse.CHOLMOD.lowrankdowndate","text":"lowrankupdate(F::CHOLMOD.Factor, C::AbstractArray) -> FF::CHOLMOD.Factor\n\nGet an LDLt Factorization of A + C*C' given an LDLt or LLt factorization F of A.\n\nThe returned factor is always an LDLt factorization.\n\nSee also lowrankdowndate!, lowrankupdate, lowrankupdate!.\n\n\n\n\n\n","category":"function"},{"location":"#SuiteSparse.CHOLMOD.lowrankdowndate!","page":"SuiteSparse","title":"SuiteSparse.CHOLMOD.lowrankdowndate!","text":"lowrankdowndate!(F::CHOLMOD.Factor, C::AbstractArray)\n\nUpdate an LDLt or LLt Factorization F of A to a factorization of A - C*C'.\n\nLLt factorizations are converted to LDLt.\n\nSee also lowrankdowndate, lowrankupdate, lowrankupdate!.\n\n\n\n\n\n","category":"function"},{"location":"#SuiteSparse.CHOLMOD.lowrankupdowndate!","page":"SuiteSparse","title":"SuiteSparse.CHOLMOD.lowrankupdowndate!","text":"lowrankupdowndate!(F::CHOLMOD.Factor, C::Sparse, update::Cint)\n\nUpdate an LDLt or LLt Factorization F of A to a factorization of A ± C*C'.\n\nIf sparsity preserving factorization is used, i.e. L*L' == P*A*P' then the new factor will be L*L' == P*A*P' + C'*C\n\nupdate: Cint(1) for A + CC', Cint(0) for A - CC'\n\n\n\n\n\n","category":"function"},{"location":"","page":"SuiteSparse","title":"SuiteSparse","text":"DocTestSetup = nothing","category":"page"}]
}