import { Controller, Delete, Get, Param, Post, Put, Body, HttpCode, HttpStatus, Header, Req, Res} from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ProductsService } from "./products.service";
import { Product } from "./schemas/product.schema";

@Controller()
export class ProductsController {

    constructor (private readonly productsService: ProductsService){
    }
    // @Get()
    // // @Redirect('https/google.com', 301)
    // getAll(@Req() req: Request, @Res() Response): string{
    //     res.status(201).end('Poke')
    //     return 'getAll'
    // }



    @Get()
    getAll(): Promise<Product[]>{
        return this.productsService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id: string): Promise<Product>{
        return this.productsService.getById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Cache-Control', 'none')
    create(@Body() createProductDto: CreateProductDto): Promise<Product> {
        return this.productsService.create(createProductDto)
    }

    @Delete()
    remove(@Param('id') id: string): Promise<Product>{
        return this.productsService.remove(id)

    }

    @Put()
    update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string): Promise<Product>{
        return this.productsService.update(id, updateProductDto)
    }
}